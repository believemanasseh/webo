package xyz.webo

import ch.qos.logback.classic.LoggerContext
import ch.qos.logback.classic.joran.JoranConfigurator
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.mustache.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import org.slf4j.LoggerFactory
import xyz.webo.plugins.configureDatabase
import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSecurity
import xyz.webo.plugins.configureSerialization

fun main() {
    embeddedServer(
        Netty,
        port = 8080,
        host = "0.0.0.0",
        module = Application::module
    ).start(wait = true)
}

fun Application.module() {
    // Configure logger
    val loggerContext = LoggerFactory.getILoggerFactory() as LoggerContext
    loggerContext.reset()
    val configurator = JoranConfigurator()
    configurator.context = loggerContext
    configurator.doConfigure(ClassLoader.getSystemResourceAsStream("logback.xml"))

    install(Authentication)
    install(Mustache)
    configureSerialization()
    install(CORS) {
        anyHost()
        allowHeader(HttpHeaders.ContentType)
    }
    configureDatabase()
    configureSecurity()
    configureRouting()
}
