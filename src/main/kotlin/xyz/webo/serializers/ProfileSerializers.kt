package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer


@Serializable
data class ProfileSerializer(
    val name: String,
    val bio: String,
    val location: String,
    val website: String,
    val displayPicture: String,
    val bannerPicture: String,
    val dateOfBirth: String,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>,
)
