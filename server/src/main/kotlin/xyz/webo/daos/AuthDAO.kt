package xyz.webo.daos

import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.innerJoin
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.insertAndGetId
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.models.Profile
import xyz.webo.models.Token
import xyz.webo.models.User
import xyz.webo.serializers.LoginSerializer
import xyz.webo.serializers.UserData
import xyz.webo.serializers.UserResponse
import xyz.webo.serializers.UserSerializer
import xyz.webo.utils.generateToken
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter


suspend fun creatUser(data: UserSerializer): UserResponse {
    val hashedPwd = BCrypt.hashpw(data.password, BCrypt.gensalt())
    val formatter = DateTimeFormatter.ISO_LOCAL_DATE

    try {
        transaction {
            val id = User.insertAndGetId {
                it[handle] = data.handle.toString()
                it[email] = data.email
                it[password] = hashedPwd
                it[dateCreated] = LocalDateTime.now()
                it[dateModified] = LocalDateTime.now()
            }
            Profile.insert {
                it[user] = id.value
                it[dateOfBirth] = LocalDate.parse(
                    data.dateOfBirth, formatter
                )
            }
            Token.insert {
                it[value] = generateToken()
                it[user] = id
            }
        }
        return UserResponse(status = "success", message = "Registration successful!")
    } catch (e: ExposedSQLException) {
        return UserResponse(status = "error", message = "DB Error: $e")
    }

}

suspend fun loginUser(data: LoginSerializer): UserResponse {
    try {
        val user = transaction {
            User.innerJoin(Token, { User.id }, { Token.id }).innerJoin(Profile, { User.id }, { Profile.id })
                .select { User.email eq data.email }.first()
        }

        // Validate password
        val pwdIsValid = BCrypt.checkpw(data.password, user[User.password])
        if (pwdIsValid) {
            return UserResponse(
                status = "success",
                message = "User login successful",
                data = UserData.SingleUser(
                    UserSerializer(
                        id = user[User.id],
                        email = user[User.email],
                        handle = user[User.handle],
                        token = user[Token.value],
                        dateOfBirth = user[Profile.dateOfBirth].toString(),
                        dateCreated = user[User.dateCreated].toString(),
                        dateModified = user[User.dateModified].toString()
                    )
                )
            )

        } else {
            return UserResponse(status = "error", message = "Invalid email or password!")
        }
    } catch (e: ExposedSQLException) {
        return UserResponse(status = "error", message = "DB Error: $e")
    }

}