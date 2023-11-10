package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer


@Serializable
data class PostSerializer(
    val text: String,
    val repostsCount: Int,
    val likesCount: Int,
    val dateCreated: String?,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>,
    @Serializable(with = EntityIDSerializer::class)
    val user: EntityID<Int>
)