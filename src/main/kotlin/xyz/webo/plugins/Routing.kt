package xyz.webo.plugins

import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import xyz.webo.routes.adminRouting
import xyz.webo.routes.authRouting
import xyz.webo.routes.postRouting
import xyz.webo.routes.userRouting
import java.io.File


fun Application.configureRouting() {
    routing {
        static("/static") {
            resources("static")
        }

        get("") {
            call.respondFile(File("src/main/resources/openapi/swagger/index.html"))
        }

        get("/documentation.yaml") {
            call.respondFile(File("src/main/resources/openapi/documentation.yaml"))
        }

        authRouting()
        adminRouting()
        userRouting()
        postRouting()
    }
}
