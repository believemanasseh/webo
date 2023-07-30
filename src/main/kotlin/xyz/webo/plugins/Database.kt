package xyz.webo.plugins

import io.ktor.server.application.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.models.Profiles
import xyz.webo.models.Users
import java.time.LocalDate
import java.time.LocalDateTime

private val s = BCrypt.hashpw("password", BCrypt.gensalt())

fun Application.configureDatabase() {
    Database.connect(
        "jdbc:postgresql://localhost:5432/webo", driver = "org.postgresql.Driver",
        user = "manasseh", password = "password"
    )
    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.drop(Users, Profiles)
        SchemaUtils.create(Users, Profiles)
        try {
            val hashedPwd = BCrypt.hashpw("password", BCrypt.gensalt())

            val id = Users.insertAndGetId {
                it[email] = "test@email.com"
                it[handle] = "test_handle"
                it[password] = hashedPwd
                it[dateCreated] = LocalDateTime.now()
                it[dateModified] = LocalDateTime.now()
            }

            Profiles.insert {
                it[name] = "Test Profile"
                it[dateOfBirth] = LocalDate.now()
                it[userId] = id.value
            }
        } catch (e: Exception) {
            println("there's an exception: $e")
        }
    }
}