package xyz.webo

import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.mustache.*
import io.ktor.server.plugins.cors.*
import io.ktor.server.plugins.cors.CORS
import io.ktor.server.plugins.cors.routing.*
//import io.ktor.swagger.*
//import io.swagger.v3.oas.models.*

import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSecurity
import xyz.webo.plugins.configureSerialization
import xyz.webo.utils.configureDatabase

fun main() {
    configureDatabase()
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
    install(ContentNegotiation) {
        json()
    }
    install(Mustache)
    install(CORS) {
        anyHost()
        allowHeader(HttpHeaders.ContentType)
    }
    configureSecurity()
    configureSerialization()
    configureRouting()
}
