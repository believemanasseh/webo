package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.plugins.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Tokens
import xyz.webo.models.Users
import xyz.webo.serializers.UserData
import xyz.webo.serializers.UserResponse
import xyz.webo.serializers.UserSerializer


fun Route.userRouting() {
    route("/v1/users") {
        authenticate {
            get {
                try {
                    val users = transaction {
                        val res = Users.selectAll()
                        val token = call.principal<UserIdPrincipal>()
                        if (token != null) {
                            val token = Tokens.select { Tokens.value eq token.name }.first()
                            res.map {
                                UserSerializer(
                                    id = it[Users.id],
                                    email = it[Users.email],
                                    handle = it[Users.handle],
                                    password = it[Users.password],
                                    token = token[Tokens.value],
                                    dateCreated = it[Users.dateCreated].toString(),
                                    dateModified = it[Users.dateModified].toString()
                                )
                            }
                        } else {
                            listOf()
                        }
                    }
                    call.respond(
                        status = HttpStatusCode.Accepted,
                        UserResponse(
                            status = "success",
                            message = "User login successful",
                            data = UserData.UserList(users)
                        )
                    )
                } catch (e: Exception) {
                    println(e)
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        mapOf("status" to "error", "message" to "Invalid request")
                    )
                }
            }
        }
        authenticate {
            get("/v1/users/{id}") {
                try {
                    val id: Int? = call.parameters["id"]?.toInt()
                    if (id !is Int) {
                        call.respond(mapOf("status" to "error", "message" to "Invalid path param"))
                    }
                    val user = async {
                        transaction {
                            Users.select { Users.id eq id }.firstOrNull()
                        }
                    }
                    if (user.await() == null) {
                        call.respond(
                            status = HttpStatusCode.NotFound,
                            mapOf("status" to "error", "message" to "User does not exist")
                        )
                    }
                    call.respond(
                        status = HttpStatusCode.Accepted,
                        UserResponse(
                            status = "success",
                            message = "User retrieved successfully",
                            data = UserData.SingleUser(
                                UserSerializer(
                                    id = user.await()!![Users.id],
                                    email = user.await()!![Users.email],
                                    handle = user.await()!![Users.handle],
                                    dateCreated = user.await()!![Users.dateCreated].toString(),
                                    dateModified = user.await()!![Users.dateModified].toString()
                                )
                            )
                        )
                    )
                } catch (e: BadRequestException) {
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        mapOf("status" to "error", "message" to "Invalid request")
                    )
                }
            }
        }

    }
}