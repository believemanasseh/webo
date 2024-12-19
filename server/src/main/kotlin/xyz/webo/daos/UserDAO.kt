package xyz.webo.daos

import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.innerJoin
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Profile
import xyz.webo.models.Token
import xyz.webo.models.User
import xyz.webo.serializers.UserData
import xyz.webo.serializers.UserResponse
import xyz.webo.serializers.UserSerializer

fun fetchUsers(): UserResponse {
    try {
        val users = transaction {
            val res = User.innerJoin(Token, { User.id }, { Token.id }).innerJoin(Profile, { User.id }, { Profile.id })
                .selectAll()
            res.map { row ->
                UserSerializer(
                    id = row[User.id],
                    email = row[User.email],
                    handle = row[User.handle],
                    token = row[Token.value],
                    password = row[User.password],
                    dateOfBirth = row[Profile.dateOfBirth].toString(),
                    dateCreated = row[User.dateCreated].toString(),
                    dateModified = row[User.dateModified].toString()
                )
            }
        }
        return UserResponse(
            status = "success",
            message = "Users retrieved successfully",
            data = UserData.UserList(users)
        )
    } catch (e: ExposedSQLException) {
        return UserResponse(status = "error", message = "DB Error: $e")
    }
}

fun fetchUser(id: Int?): UserResponse {
    try {
        if (id !is Int) {
            return UserResponse(status = "error", message = "Invalid path param")
        }

        val user = transaction {
            User.innerJoin(Token, { User.id }, { Token.id }).innerJoin(Profile, { User.id }, { Profile.id })
                .select { User.id eq id }.firstOrNull()
        }

        if (user == null) {
            return UserResponse(status = "error", message = "User does not exist")
        }

        return UserResponse(
            status = "success",
            message = "User retrieved successfully",
            data = UserData.SingleUser(
                UserSerializer(
                    id = user[User.id],
                    email = user[User.email],
                    handle = user[User.handle],
                    token = user[Token.value],
                    password = user[User.password],
                    dateOfBirth = user[Profile.dateOfBirth].toString(),
                    dateCreated = user[User.dateCreated].toString(),
                    dateModified = user[User.dateModified].toString()
                )
            )
        )
    } catch (e: ExposedSQLException) {
        return UserResponse(status = "error", message = "DB Error: $e")
    }
}