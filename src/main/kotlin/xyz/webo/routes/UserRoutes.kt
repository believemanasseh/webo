package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Users
import xyz.webo.serializers.UserSerializer


fun Route.userRouting() {
    route("/v1/users") {
        get {
            try {
                val users = transaction {
                    val res = Users.selectAll()
                    res.map {
                        UserSerializer(
                            id = it[Users.id],
                            email = it[Users.email],
                            handle = it[Users.handle],
                            password = it[Users.password],
                            dateCreated = it[Users.dateCreated],
                            dateModified = it[Users.dateModified]
                        )
                    }
                }
                call.respond(
                    status = HttpStatusCode.Accepted,
                    mapOf(
                        "status" to "success",
                        "message" to "Users retrieved successfully",
                        "data" to users
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
        get("/{id}") {
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
                    mapOf("status" to "success", "message" to "User retrieved successfully", "data" to user)
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