package xyz.webo.routes

import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import kotlinx.coroutines.delay


fun Route.authRouting() {
    route("/signup") {
        post {
            var res = async {
                mapOf("status" to "success", "message" to "Registration successful!")
            }
            call.respond(res.await())
        }
    }
    route("/login") {
        post {
            var res = async {
                mapOf("status" to "success", "message" to "Login successful!")
            }
            call.respond(res.await())
        }
    }
}