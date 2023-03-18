package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.models.User
import xyz.webo.serializers.CreateUserSerializer
import xyz.webo.serializers.LoginUserSerializer
import java.time.LocalDateTime


fun Route.authRouting() {
    route("/v1/signup") {
        post {
            try {
                val res = async {
                    val data = call.receive<CreateUserSerializer>()
                    val hashedPwd = BCrypt.hashpw(data.password, BCrypt.gensalt())
                    var user: EntityID<Int>
                    try {
                        transaction {
                            user = User.insertAndGetId {
                                it[handle] = data.handle
                                it[email] = data.email
                                it[password] = hashedPwd
                                it[dateCreated] = LocalDateTime.now()
                                it[dateModified] = LocalDateTime.now()
                            }
                        }
                        mapOf("status" to "success", "message" to "Registration successful!")
                    } catch (e: ExposedSQLException) {
                        mapOf("status" to "error", "message" to "User already exists!")
                    }

                }
                call.respond(status = HttpStatusCode.Created, res.await())
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
                val data = call.receive<LoginUserSerializer>()
                var pwdValid: Boolean = false
                var user: ResultRow? = null
                transaction {
                    user = User.select { User.email eq data.email }.first()
                    val pwdIsValid = BCrypt.checkpw(data.password, user!![User.password])
                    if (pwdIsValid) {
                        pwdValid = true
                    }
                }
                var res = if (pwdValid) {
                    mapOf("status" to "success", "message" to "Login successful!")
                } else {
                    mapOf("status" to "error", "message" to "Invalid email or password!")
                }
                if (res["status"] == "success") {
                    call.respond(status = HttpStatusCode.Accepted, res)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, res)
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