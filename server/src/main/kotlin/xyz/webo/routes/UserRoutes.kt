package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import xyz.webo.daos.fetchUser
import xyz.webo.daos.fetchUsers


fun Route.userRouting() {
    route("/v1/users") {
        get {
            try {
                val response = fetchUsers()
                if (response.status == "success") {
                    call.respond(status = HttpStatusCode.Accepted, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest, mapOf("status" to "error", "message" to "Invalid request")
                )
            }
        }
    }
    route("/v1/users/{id}") {
        get {
            try {
                val id: Int? = call.parameters["id"]?.toInt()
                val response = fetchUser(id)

                if (response.status == "success") {
                    call.respond(status = HttpStatusCode.Accepted, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest, mapOf("status" to "error", "message" to "Invalid request")
                )
            }
        }
    }
}