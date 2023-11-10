package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import kotlinx.serialization.MissingFieldException
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Posts
import xyz.webo.serializers.PostSerializer
import java.time.LocalDateTime

fun Route.postRouting() {
    route("/v1/posts") {
        post {
            try {
                val res = async {
                    val data = call.receive<PostSerializer>()

                    transaction {
                        val id = Posts.insertAndGetId {
                            it[user] = data.user
                            it[text] = data.text
                            it[dateCreated] = LocalDateTime.now()
                        }
                    }
                    mapOf(
                        "status" to "success",
                        "message" to "Post created successfully!",
                        "data" to PostSerializer
                    )

                }

                val response = res.await()
                if (response["status"] == "success") {
                    call.respond(status = HttpStatusCode.Created, response)
                } else {
                    call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                }
            } catch (e: MissingFieldException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!", "error" to e.toString())
                )
            } catch (e: BadRequestException) {
                call.respond(
                    status = HttpStatusCode.BadRequest,
                    mapOf("status" to "error", "message" to "Invalid request!")
                )
            }
        }
    }
}