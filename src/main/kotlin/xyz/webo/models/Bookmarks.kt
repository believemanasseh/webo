package xyz.webo.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object Bookmarks : IntIdTable() {
    val created: Column<LocalDateTime> = datetime("created")
    val userId = integer("user_id").references(Users.id, onDelete = ReferenceOption.CASCADE)
}