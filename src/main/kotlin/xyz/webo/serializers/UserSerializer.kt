package xyz.webo.serializers

import kotlinx.serialization.*
import java.time.LocalDateTime


@Serializable
data class LoginUserSerializer(val email: String, val password: String)

@Serializable
data class CreateUserSerializer(val email: String, val handle: String, val password: String)
