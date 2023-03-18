package xyz.webo.plugins

import io.ktor.http.*
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.swagger.*
import io.ktor.server.util.*
import io.ktor.server.plugins.openapi.*
import io.ktor.server.response.*
import java.io.File

import xyz.webo.routes.*

fun Application.configureRouting() {
    routing {
        static("/static") {
            resources("static")
        }

        get("") {
            call.respondFile(File("src/main/resources/static/swagger/index.html"))
        }

        get("/documentation.yaml") {
            call.respondFile(File("src/main/resources/openapi/documentation.yaml"))
        }

        authRouting()
        adminRouting()
    }
}
