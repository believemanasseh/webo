package xyz.webo.routes

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import io.ktor.server.application.*
import io.ktor.server.mustache.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.mustache.MustacheContent
import xyz.webo.models.*


fun Route.adminRouting() {
    route("/admin") {
        get {
            val users = transaction {
                Users.selectAll()
            }
            println(users)
            call.respond(
                MustacheContent(
                    "src/main/resources/static/index.hbs",
                    mapOf("model" to mapOf("name" to mapOf("users" to "User", "profiles" to "Profile")))
                )
            )
        }
        get("/users") {
            call.respond(
                MustacheContent(
                    "src/main/resources/static/users.hbs",
                    mapOf("model" to mapOf("name" to mapOf("users" to "User")))
                )
            )
        }
        get("/profiles") {
            call.respond(
                MustacheContent(
                    "src/main/resources/static/profiles.hbs",
                    mapOf("model" to "profiles")
                )
            )
        }
    }
}