package xyz.webo

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.mustache.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.cors.routing.*
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Tokens
import xyz.webo.plugins.*


fun main() {
    embeddedServer(
        Netty,
        port = 8081,
        host = "0.0.0.0",
        module = Application::module
    ).start(wait = true)
}

fun Application.module() {
    install(Authentication) {
        bearer {
            realm = "webo"
            authenticate { tokenCredential ->
                val token = transaction {
                    Tokens.select { Tokens.value eq tokenCredential.token }.firstOrNull()
                }
                if (token != null) {
                    if (tokenCredential.token == token[Tokens.value].toString()) {
                        UserIdPrincipal(token[Tokens.value].toString())
                    } else {
                        null
                    }
                } else {
                    null
                }
            }
        }
    }
    install(Mustache)
    configureLogger()
    configureSerialization()
    install(CORS) {
        anyHost()
        allowHeader(HttpHeaders.ContentType)
    }
    configureDatabase()
    configureSecurity()
    configureRouting()
}
