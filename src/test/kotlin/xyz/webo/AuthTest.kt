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
import xyz.webo.models.Tokens
import xyz.webo.plugins.configureDatabase
import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSerialization
import xyz.webo.serializers.UserSerializer
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals

class AuthTest {
    @BeforeTest
    fun setUp() {
        embeddedServer(Netty, port = Config.TEST_SERVER_PORT.toInt()) {
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
            configureSerialization()
            configureDatabase(testing = true)
            configureRouting()
        }.start()
    }

    @Test
    fun testLogin() = testApplication {
        val res = client.post("http://localhost:8082/v1/login") {
            header(HttpHeaders.ContentType, ContentType.Application.Json)
            setBody(Json.encodeToString(UserSerializer.serializer(), UserSerializer("test@email.com", "password")))
        }
        assertEquals(HttpStatusCode.Accepted, res.status)
    }
}
