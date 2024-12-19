package xyz.webo.daos

import io.ktor.server.auth.*
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Post
import xyz.webo.models.Token
import xyz.webo.serializers.PostData
import xyz.webo.serializers.PostResponse
import xyz.webo.serializers.PostSerializer
import java.time.LocalDateTime

fun createPost(data: PostSerializer, token: UserIdPrincipal?): PostResponse {
    try {
        if (token == null) {
            return PostResponse(status = "error", message = "Invalid token!")
        }

        val post = transaction {
            val tokenObj = Token.select { Token.value eq token.name }.first()
            val id = Post.insertAndGetId {
                it[user] = tokenObj[Token.user]
                it[text] = data.text.toString()
                it[dateCreated] = LocalDateTime.now()
            }
            Post.select { Post.id eq id }.first()
        }

        return PostResponse(
            status = "success",
            message = "Post created successfully!",
            data = PostData.SinglePost(
                PostSerializer(
                    id = post[Post.id],
                    text = post[Post.text],
                    repostsCount = post[Post.repostsCount],
                    likesCount = post[Post.likesCount],
                    dateCreated = post[Post.dateCreated].toString(),
                    user = post[Post.user]
                )
            )
        )
    } catch (e: ExposedSQLException) {
        return PostResponse(status = "error", message = "DB Error: $e")
    }
}

fun fetchPosts(token: UserIdPrincipal?): PostResponse {
    try {
        if (token == null) {
            return PostResponse(status = "error", message = "Invalid token!")
        }

        val tokenObj = transaction {
            Token.select { Token.value eq token.name }.firstOrNull()
        }
        val postObjs = transaction {
            Post.select { Post.user eq tokenObj!![Token.user] }
        }
        val posts = postObjs.map {
            PostSerializer(
                text = it[Post.text],
                repostsCount = it[Post.repostsCount],
                likesCount = it[Post.likesCount],
                dateCreated = it[Post.dateCreated].toString(),
                id = it[Post.id],
                user = it[Post.user]
            )
        }

        return PostResponse(
            status = "success",
            message = "Posts retrieved successfully!",
            data = PostData.PostList(posts)
        )
    } catch (e: ExposedSQLException) {
        return PostResponse(status = "error", message = "DB Error: $e")
    }

}