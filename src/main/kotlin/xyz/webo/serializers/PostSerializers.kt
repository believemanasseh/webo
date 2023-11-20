package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer


@Serializable
data class PostSerializer(
    val text: String,
    val repostsCount: Int? = null,
    val likesCount: Int? = null,
    val dateCreated: String? = null,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>? = null,
    @Serializable(with = EntityIDSerializer::class)
    val user: EntityID<Int>? = null
)

@Serializable
data class PostResponse(
    val status: String,
    val message: String,
    val data: PostSerializer
)