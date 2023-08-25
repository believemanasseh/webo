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
import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.models.Profile
import xyz.webo.models.Users
import xyz.webo.serializers.CreateUserSerializer
import xyz.webo.serializers.LoginUserSerializer
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


fun Route.authRouting() {
    route("/v1/signup") {
        post {
            try {
                val res = async {
                    val data = call.receive<CreateUserSerializer>()
                    println(data.dateOfBirth)
                    println("date of birth")
                    val hashedPwd = BCrypt.hashpw(data.password, BCrypt.gensalt())
                    try {
                        transaction {
                            val id = Users.insertAndGetId {
                                it[handle] = data.handle
                                it[email] = data.email
                                it[password] = hashedPwd
                                it[dateCreated] = LocalDateTime.now()
                                it[dateModified] = LocalDateTime.now()
                            }
                            val formatter = DateTimeFormatter.ISO_LOCAL_DATE
                            Profile.insert {
                                it[user] = id.value
                                it[dateOfBirth] = LocalDate.parse(data.dateOfBirth, formatter)
                            }
                        }
                        mapOf("status" to "success", "message" to "Registration successful!")
                    } catch (e: ExposedSQLException) {
                        mapOf("status" to "error", "message" to "User already exists!")
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
                val res = async {
                    var data = call.receive<LoginUserSerializer>()
                    var pwdValid = false
                    var user: ResultRow? = null
                    transaction {
                        user = try {
                            Users.select { Users.email eq data.email }.first()
                        } catch (e: NoSuchElementException) {
                            null
                        }
                        if (user != null) {
                            val pwdIsValid = BCrypt.checkpw(data.password, user!![Users.password])
                            if (pwdIsValid) {
                                pwdValid = true
                            }
                        }
                    }
                    if (pwdValid && user != null) {
                        mapOf("status" to "success", "message" to "Login successful!")
                    } else {
                        mapOf("status" to "error", "message" to "Invalid email or password!")
                    }
                }
                val response = res.await()
                if (response["status"] == "success") {
                    call.respond(status = HttpStatusCode.Accepted, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!")
                )
            }

        }
    }
}