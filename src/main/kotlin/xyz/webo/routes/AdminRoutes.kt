package xyz.webo.routes

import io.ktor.server.application.*
import io.ktor.server.mustache.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction
import xyz.webo.models.Profiles
import xyz.webo.models.Users
import xyz.webo.serializers.ProfileSerializer
import xyz.webo.serializers.UserSerializer


fun Route.adminRouting() {
    route("/admin") {
        get {
            call.respond(
                MustacheContent(
                    "src/main/resources/static/index.hbs", mapOf("" to "")
                )
            )
        }
        get("/users") {
            val users = transaction {
                val res = Users.selectAll()
                res.map {
                    UserSerializer(
                        id = it[Users.id],
                        email = it[Users.email],
                        handle = it[Users.handle],
                        password = it[Users.password],
                        dateCreated = it[Users.dateCreated].toString(),
                        dateModified = it[Users.dateModified].toString()
                    )
                }
            }
            call.respond(
                MustacheContent(
                    "src/main/resources/static/users.hbs",
                    mapOf("users" to users, "count" to users.count())
                )
            )
        }
        get("/profiles") {
            val profiles = transaction {
                val res = Profiles.selectAll()
                res.map {
                    ProfileSerializer(
                        it[Profiles.name].toString(),
                        it[Profiles.bio].toString(),
                        it[Profiles.location].toString(),
                        it[Profiles.website].toString(),
                        it[Profiles.displayPicture].toString(),
                        it[Profiles.bannerPicture].toString(),
                        it[Profiles.dateOfBirth].toString(),
                        it[Profiles.id]
                    )
                }
            }
            call.respond(
                MustacheContent(
                    "src/main/resources/static/profiles.hbs",
                    mapOf("profiles" to profiles)
                )
            )
        }
    }
}