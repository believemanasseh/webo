package xyz.webo

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import kotlinx.coroutines.runBlocking
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Profile
import xyz.webo.models.User
import xyz.webo.plugins.configureRouting
import xyz.webo.plugins.configureSecurity
import xyz.webo.plugins.configureSerialization
import java.time.LocalDateTime


fun main() {
    Database.connect(
        "jdbc:postgresql://localhost:5432/webo", driver = "org.postgresql.Driver",
        user = "manasseh", password = "password"
    )
    transaction {
        addLogger(StdOutSqlLogger)
//        SchemaUtils.drop(User, Profile)
        SchemaUtils.create(User, Profile)
        try {

//            val hasher = PasswordHasher("SHA-512", 10000, Random)
//            val hash = runBlocking { hasher.hash("password".toCharArray()) }
//            hash.joinToString(":")
            val id = User.insertAndGetId {
                it[email] = "test@email.com"
                it[handle] = "test_handle"
                it[password] = "password"
                it[dateCreated] = LocalDateTime.now()
                it[dateModified] = LocalDateTime.now()
            }
            Profile.insert {
                it[name] = "Test Profile"
                it[userId] = id.value
            }
        } catch (e: Exception) {
            println("there's an exception: $e")
        }
    }
    embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module)
        .start(wait = true)
}

fun Application.module() {
    println("do for me")
    configureSecurity()
    configureSerialization()
    configureRouting()
}
