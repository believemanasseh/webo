package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer


@Serializable
data class PostSerializer(
    val text: String? = null,
    val repostsCount: Int? = null,
    val likesCount: Int? = null,
    val dateCreated: String? = null,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>? = null,
    @Serializable(with = EntityIDSerializer::class)
    val user: EntityID<Int>? = null,
    val bookmark: Boolean = false
)

@Serializable
data class PostResponse(
    val status: String,
    val message: String,
    val data: PostData
)

@Serializable
sealed class PostData {
    @Serializable
    data class SinglePost(val post: PostSerializer) : PostData()

    @Serializable
    data class PostList(val postList: List<PostSerializer>) : PostData()
}