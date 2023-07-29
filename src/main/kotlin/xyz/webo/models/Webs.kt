package xyz.webo.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*
import java.time.LocalDateTime
import org.jetbrains.exposed.sql.javatime.datetime

object Web: IntIdTable() {
    val text: Column<String> = varchar("text", 250)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val userId = integer("user_id").references(User.id, onDelete = ReferenceOption.CASCADE)
}