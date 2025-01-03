package xyz.webo

import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.testing.*
import kotlinx.serialization.json.Json
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.testng.Assert.assertEquals
import org.testng.annotations.BeforeTest
import org.testng.annotations.Test
import xyz.webo.models.Token
import xyz.webo.plugins.configureDatabase
import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSerialization
import xyz.webo.serializers.LoginSerializer

class AuthTest {
    @BeforeTest
    fun setUp() {
        embeddedServer(Netty, port = Config.TEST_SERVER_PORT.toInt()) {
            extracted()
        }.start()
    }

    private fun Application.extracted() {
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
        configureSerialization()
        configureDatabase(testing = true)
        configureRouting()
    }

    @Test
    fun testLogin() = testApplication {
        val res = client.post("http://localhost:8082/v1/login") {
            header(HttpHeaders.ContentType, ContentType.Application.Json)
            setBody(Json.encodeToString(LoginSerializer.serializer(), LoginSerializer("test@email.com", "password")))
        }
        assertEquals(HttpStatusCode.Accepted, res.status)
    }
}
