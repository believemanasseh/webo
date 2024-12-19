package xyz.webo.plugins

import io.ktor.server.application.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.mindrot.jbcrypt.BCrypt
import xyz.webo.Config
import xyz.webo.models.Post
import xyz.webo.models.Profile
import xyz.webo.models.Token
import xyz.webo.models.User
import xyz.webo.utils.generateToken
import xyz.webo.utils.getLogger
import java.time.LocalDate
import java.time.LocalDateTime

val logger = getLogger()

fun Application.configureDatabase(testing: Boolean = false) {
    val dbUrl: String = if (!testing) Config.DB_URL else Config.TEST_DB_URL
    Database.connect(
        dbUrl, driver = Config.DB_DRIVER, user = Config.DB_USER, password = Config.DB_PASSWORD
    )
    transaction {
        addLogger(StdOutSqlLogger)
        SchemaUtils.drop(Profile, Token, Post, User)
        SchemaUtils.create(User, Profile, Token, Post)

        try {
            val hashedPwd = BCrypt.hashpw(Config.ADMIN_USER_PASSWORD, BCrypt.gensalt())

            val id = User.insertAndGetId {
                it[email] = Config.ADMIN_USER_EMAIL
                it[handle] = Config.ADMIN_USER_HANDLE
                it[password] = hashedPwd
                it[dateCreated] = LocalDateTime.now()
                it[dateModified] = LocalDateTime.now()
            }
            logger.info("Created admin user instance successfully")

            Profile.insert {
                it[name] = "Test Profile"
                it[dateOfBirth] = LocalDate.now()
                it[user] = id.value
            }
            Token.insert {
                it[value] = generateToken()
                it[user] = id
            }
            logger.info("Created admin profile instance successfully")
        } catch (e: Exception) {
            throw Exception("Database Error: $e")
        }
    }
}