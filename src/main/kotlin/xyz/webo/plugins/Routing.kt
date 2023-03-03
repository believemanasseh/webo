package xyz.webo.plugins

import io.ktor.server.routing.*
import io.ktor.server.response.*
import io.ktor.server.application.*

import xyz.webo.routes.*

fun Application.configureRouting() {
    routing {
        authRouting()
    }
}
