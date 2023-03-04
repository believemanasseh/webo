package xyz.webo.routes

import io.ktor.server.application.*
import io.ktor.server.mustache.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.mustache.MustacheContent


fun Route.adminRouting() {
    route("/admin") {
        get {
            call.respond(MustacheContent("src/main/resources/static/index.hbs", mapOf("model" to mapOf("name" to "Users"))))
        }
    }
}