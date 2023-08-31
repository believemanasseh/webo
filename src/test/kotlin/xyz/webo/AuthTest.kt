package xyz.webo

import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.testing.*
import kotlinx.serialization.json.Json
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
            configureSerialization()
            configureDatabase(testing = true)
            configureRouting()
        }.start()
    }

    @Test
    fun testLogin() = testApplication {
        val res = client.post("/v1/login") {
            header(HttpHeaders.ContentType, ContentType.Application.Json)
            setBody(Json.encodeToString(UserSerializer.serializer(), UserSerializer("test@email.com", "password")))
        }
        assertEquals(HttpStatusCode.Accepted, res.status)
    }
}
