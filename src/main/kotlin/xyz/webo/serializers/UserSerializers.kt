package xyz.webo.serializers

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID


@Serializable
data class LoginUserSerializer(val email: String, val password: String)

@Serializable
data class CreateUserSerializer(
    val email: String,
    val handle: String,
    val password: String,
    val dateOfBirth: String
)

@Serializable
data class UserSerializer(
    val email: String,
    val handle: String,
    val password: String,
    val dateCreated: String,
    val dateModified: String,
    @Contextual
    val id: EntityID<Int>
)

@Serializable
data class ProfileSerializer(
    val name: String,
    val bio: String,
    val location: String,
    val website: String,
    val displayPicture: String,
    val bannerPicture: String,
    val dateOfBirth: String,
    @Contextual
    val id: EntityID<Int>,
)