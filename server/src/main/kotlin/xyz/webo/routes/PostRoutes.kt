package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.MissingFieldException
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.daos.createPost
import xyz.webo.daos.fetchPosts
import xyz.webo.models.Bookmark
import xyz.webo.models.Token
import xyz.webo.models.User
import xyz.webo.serializers.PostSerializer

@OptIn(ExperimentalSerializationApi::class)
fun Route.postRouting() {
    route("/v1/posts") {
        authenticate {
            post {
                val data = call.receive<PostSerializer>()
                val token = call.principal<UserIdPrincipal>()

                try {
                    val response = createPost(data, token)

                    if (response.status == "success") {
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
            get {
                val token = call.principal<UserIdPrincipal>()
                try {
                    val response = fetchPosts(token)

                    if (response.status == "success") {
                        call.respond(status = HttpStatusCode.Accepted, response)
                    } else {
                        call.respond(status = HttpStatusCode.UnprocessableEntity, response)
                    }
                } catch (e: MissingFieldException) {
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        mapOf("status" to "error", "message" to "Invalid request!", "error" to e.toString())
                    )
                }
            }
            patch("/{id}") {
                try {
                    val token = call.principal<UserIdPrincipal>()
                    val data = call.receive<PostSerializer>()
                    val id: Int? = call.parameters["id"]?.toInt()
                    if (id !is Int) {
                        call.respond(mapOf("status" to "error", "message" to "Invalid path param"))
                    }
                    val tokenObj = transaction {
                        Token.select { Token.value eq token!!.name }.firstOrNull()
                    }
                    val user = transaction {
                        User.select { User.id eq tokenObj!![Token.user] }.firstOrNull()
                    }
                    val bookmark = transaction {
                        Bookmark.select { Bookmark.post eq id; Bookmark.user eq user!![User.id] }
                    }
//                    transaction {
//                        Bookmark.insert {
//                            it[post] = id as EntityID<Int>
//                            it[user] = user!![User.id]
//                        }
//                    }
                } catch (e: MissingFieldException) {
                    call.respond(
                        status = HttpStatusCode.BadRequest,
                        mapOf("status" to "error", "message" to "Invalid request!", "error" to e.toString())
                    )
                }
            }
        }
    }
}