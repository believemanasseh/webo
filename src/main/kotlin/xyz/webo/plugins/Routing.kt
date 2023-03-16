package xyz.webo.plugins

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.plugins.contentnegotiation.*

import xyz.webo.routes.*

fun Application.configureRouting() {
    routing {
        static("/static") {
            resources("static")
        }
        authRouting()
        adminRouting()
    }
}
