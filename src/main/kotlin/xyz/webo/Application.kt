package xyz.webo

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.mustache.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import xyz.webo.plugins.configureDatabase
import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSecurity
import xyz.webo.plugins.configureSerialization

fun main() {
    embeddedServer(
        Netty,
        watchPaths = listOf("src", "resources"),
        port = 8080,
        host = "0.0.0.0",
        module = Application::module
    )
        .start(wait = true)
}

fun Application.module() {
    install(Authentication)
    install(Mustache)
    install(CORS) {
        anyHost()
        allowHeader(HttpHeaders.ContentType)
    }
    configureDatabase()
    configureSecurity()
    configureSerialization()
    configureRouting()
}
