package xyz.webo

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import xyz.webo.plugins.*


fun main() {
    Database.connect("jdbc:postgresql://localhost:5432/webo", driver = "org.postgresql.Driver",
        user = "manasseh", password = "password")
    embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module)
        .start(wait = true)
    transaction {

    }
}

fun Application.module() {
    configureSecurity()
    configureSerialization()
    configureRouting()
}
