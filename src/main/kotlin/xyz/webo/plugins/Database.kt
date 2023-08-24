package xyz.webo.plugins

import io.ktor.server.application.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.Config
import xyz.webo.models.Profiles
import xyz.webo.models.Users
import java.time.LocalDate
import java.time.LocalDateTime

fun Application.configureDatabase() {
    Database.connect(
        Config.DB_URL, driver = Config.DB_DRIVER, user = Config.DB_USER, password = Config.DB_PASSWORD
    )
    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.drop(Users, Profiles)
        SchemaUtils.create(Users, Profiles)
        try {
            val hashedPwd = BCrypt.hashpw(Config.ADMIN_USER_PASSWORD, BCrypt.gensalt())

            val id = Users.insertAndGetId {
                it[email] = Config.ADMIN_USER_EMAIL
                it[handle] = Config.ADMIN_USER_HANDLE
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
            log
            throw Exception("Database Error: $e")
        }
    }
}