package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object Webs : IntIdTable() {
    val text: Column<String> = varchar("text", 250)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val userId: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
}