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
import xyz.webo.models.Token
import xyz.webo.plugins.*


fun main() {
    embeddedServer(
        Netty,
        port = 8080,
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
                    Token.select { Token.value eq tokenCredential.token }.firstOrNull()
                }
                if (token != null) {
                    if (tokenCredential.token == token[Token.value].toString()) {
                        UserIdPrincipal(token[Token.value].toString())
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
