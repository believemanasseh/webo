package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer
import xyz.webo.serializers.custom.LocalDateTimeSerializer
import java.time.LocalDateTime


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
    val handle: String? = null,
    @Serializable(with = LocalDateTimeSerializer::class)
    val dateCreated: LocalDateTime? = null,
    @Serializable(with = LocalDateTimeSerializer::class)
    val dateModified: LocalDateTime? = null,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>? = null,
    val password: String? = null
)

@Serializable
data class UserResponse(val status: String, val message: String, val data: UserSerializer)