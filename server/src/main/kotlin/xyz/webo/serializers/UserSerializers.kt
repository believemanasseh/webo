package xyz.webo.serializers

import kotlinx.serialization.Serializable
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.serializers.custom.EntityIDSerializer


@Serializable
data class LoginSerializer(
    val email: String? = null,
    val handle: String? = null,
    val password: String
)

@Serializable
data class UserSerializer(
    val email: String,
    val handle: String,
    val dateOfBirth: String,
    val dateCreated: String? = null,
    val token: String? = null,
    val dateModified: String? = null,
    @Serializable(with = EntityIDSerializer::class)
    val id: EntityID<Int>? = null,
    val password: String? = null
)

@Serializable
sealed class UserData {
    @Serializable
    data class SingleUser(val user: UserSerializer) : UserData()

    @Serializable
    data class UserList(val userList: List<UserSerializer>) : UserData()
}

@Serializable
data class UserResponse(
    val status: String,
    val message: String,
    val data: UserData? = null
)