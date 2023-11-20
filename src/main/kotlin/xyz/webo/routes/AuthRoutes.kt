package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import kotlinx.serialization.MissingFieldException
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.models.Profile
import xyz.webo.models.Tokens
import xyz.webo.models.Users
import xyz.webo.serializers.CreateUserSerializer
import xyz.webo.serializers.UserData
import xyz.webo.serializers.UserResponse
import xyz.webo.serializers.UserSerializer
import xyz.webo.utils.generateToken
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


fun Route.authRouting() {
    route("/v1/signup") {
        post {
            try {
                val data = call.receive<CreateUserSerializer>()
                val hashedPwd = BCrypt.hashpw(data.password, BCrypt.gensalt())
                val formatter = DateTimeFormatter.ISO_LOCAL_DATE
                val res = async {
                    try {
                        transaction {
                            val id = Users.insertAndGetId {
                                it[handle] = data.handle
                                it[email] = data.email
                                it[password] = hashedPwd
                                it[dateCreated] = LocalDateTime.now()
                                it[dateModified] = LocalDateTime.now()
                            }
                            Profile.insert {
                                it[user] = id.value
                                it[dateOfBirth] = if (data.dateOfBirth != null) LocalDate.parse(
                                    data.dateOfBirth,
                                    formatter
                                ) else LocalDate.now()
                            }
                            Tokens.insert {
                                it[value] = generateToken()
                                it[user] = id
                            }
                        }
                        mapOf("status" to "success", "message" to "Registration successful!")
                    } catch (e: ExposedSQLException) {
                        mapOf("status" to "error", "message" to "User already exists!${e}")
                    }
                }
                val response = res.await()
                if (response["status"] == "success") {
                    call.respond(status = HttpStatusCode.Created, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: MissingFieldException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!", "error" to e.toString())
                )
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!")
                )
            }
        }
    }
    route("/v1/login") {
        post {
            try {
                val data = call.receive<UserSerializer>()
                val res = async {
                    val user = transaction {
                        Users.select { Users.email eq data.email }.first()
                    }
                    val token = transaction {
                        Tokens.select { Tokens.user eq user[Users.id] }.first()
                    }
                    val pwdIsValid = BCrypt.checkpw(data.password, user[Users.password])
                    if (pwdIsValid) {
                        UserResponse(
                            status = "success",
                            message = "User login successful",
                            data = UserData.SingleUser(
                                UserSerializer(
                                    id = user[Users.id],
                                    email = user[Users.email],
                                    handle = user[Users.handle],
                                    token = token[Tokens.value],
                                    dateCreated = user[Users.dateCreated].toString(),
                                    dateModified = user[Users.dateModified].toString()
                                )
                            )
                        )
                    } else {
                        mapOf("status" to "error", "message" to "Invalid email or password!")
                    }
                }
                val response: UserResponse = res.await() as UserResponse
                if (response.status == "success") {
                    call.respond(status = HttpStatusCode.Accepted, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!")
                )
            } catch (e: NoSuchElementException) {
                call.respond(
                    status = HttpStatusCode.NotFound,
                    mapOf("status" to "error", "message" to "Invalid user")
                )
            }

        }
    }
}