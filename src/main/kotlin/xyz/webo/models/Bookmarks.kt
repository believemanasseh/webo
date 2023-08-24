package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object Bookmarks : IntIdTable() {
    val created: Column<LocalDateTime> = datetime("created")
    val userId: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
}