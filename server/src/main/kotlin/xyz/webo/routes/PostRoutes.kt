package xyz.webo.routes

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.plugins.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.async
import kotlinx.serialization.MissingFieldException
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Bookmarks
import xyz.webo.models.Posts
import xyz.webo.models.Tokens
import xyz.webo.models.Users
import xyz.webo.serializers.PostData
import xyz.webo.serializers.PostResponse
import xyz.webo.serializers.PostSerializer
import java.time.LocalDateTime

fun Route.postRouting() {
    route("/v1/posts") {
        authenticate {
            post {
                val data = call.receive<PostSerializer>()
                val token = call.principal<UserIdPrincipal>()
                try {
                    val res = async {
                        val post = transaction {
                            val tokenObj = Tokens.select { Tokens.value eq token!!.name }.first()
                            val id = Posts.insertAndGetId {
                                it[user] = tokenObj[Tokens.user]
                                it[text] = data.text.toString()
                                it[dateCreated] = LocalDateTime.now()
                            }
                            Posts.select { Posts.id eq id }.first()
                        }
                        PostResponse(
                            status = "success",
                            message = "Post created successfully!",
                            data = PostData.SinglePost(
                                PostSerializer(
                                    id = post[Posts.id],
                                    text = post[Posts.text],
                                    repostsCount = post[Posts.repostsCount],
                                    likesCount = post[Posts.likesCount],
                                    dateCreated = post[Posts.dateCreated].toString(),
                                    user = post[Posts.user]
                                )
                            )
                        )
                    }
                    val response = res.await()
                    call.respond(status = HttpStatusCode.Created, response)

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
                try {
                    val token = call.principal<UserIdPrincipal>()
                    val tokenObj = transaction {
                        Tokens.select { Tokens.value eq token!!.name }.firstOrNull()
                    }
                    val postObjs = transaction {
                        Posts.select { Posts.user eq tokenObj!![Tokens.user] }
                    }
                    val posts = transaction {
                        postObjs.map {
                            PostSerializer(
                                text = it[Posts.text],
                                repostsCount = it[Posts.repostsCount],
                                likesCount = it[Posts.likesCount],
                                dateCreated = it[Posts.dateCreated].toString(),
                                id = it[Posts.id],
                                user = it[Posts.user]
                            )
                        }
                    }
                    call.respond(
                        status = HttpStatusCode.OK,
                        PostResponse(
                            status = "success",
                            message = "Posts retrieved successfully!",
                            data = PostData.PostList(posts)
                        )
                    )
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
                        Tokens.select { Tokens.value eq token!!.name }.firstOrNull()
                    }
                    val user = transaction {
                        Users.select { Users.id eq tokenObj!![Tokens.user] }.firstOrNull()
                    }
                    val bookmark = transaction {
                        Bookmarks.select { Bookmarks.post eq id; Bookmarks.user eq user!![Users.id] }
                    }
//                    transaction {
//                        Bookmark.insert {
//                            it[post] = id as EntityID<Int>
//                            it[user] = user!![Users.id]
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