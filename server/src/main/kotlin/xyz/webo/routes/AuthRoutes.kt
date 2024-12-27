package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.MissingFieldException
import xyz.webo.daos.creatUser
import xyz.webo.daos.loginUser
import xyz.webo.serializers.LoginSerializer
import xyz.webo.serializers.UserSerializer


@OptIn(ExperimentalSerializationApi::class)
fun Route.authRouting() {
    route("/v1/signup") {
        post {
            try {
                val data = call.receive<UserSerializer>()
                val response = creatUser(data)

                if (response.status == "success") {
                    call.respond(status = HttpStatusCode.Created, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: MissingFieldException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Missing Field!", "error" to e.toString())
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
                val data = call.receive<LoginSerializer>()
                val response = loginUser(data)

                if (response.status == "success") {
                    call.respond(status = HttpStatusCode.Accepted, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request! $e")
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