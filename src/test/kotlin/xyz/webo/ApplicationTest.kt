package xyz.webo

import io.ktor.client.call.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.server.testing.*
import kotlin.test.*
import io.ktor.http.*
import xyz.webo.plugins.*

//class ApplicationTest {
//    @Test
//    fun testRoot() = testApplication {
//        application {
//            configureRouting()
//        }
//        client.post("/v1/login").apply {
//            assertEquals(HttpStatusCode.Accepted, status)
//            assertEquals(mapOf("status" to "success", "message" to "Login successful!"), body())
//        }
//    }
//}
