package xyz.webo.serializers

import kotlinx.serialization.Serializable


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
    val dateModified: String
)

//@Serializable
//data class Response(
//    val status: String,
//    val message: String,
//    @Contextual
//    val data: LinkedHashMap<String, Any>
//)