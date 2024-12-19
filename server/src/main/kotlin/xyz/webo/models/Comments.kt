package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime


object Comment : IntIdTable() {
    val text: Column<String> = varchar("text", 300)
    val likesCount: Column<Int> = integer("likes_count").default(0)
    val repostsCount: Column<Int> = integer("reposts_count").default(0)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val user: Column<EntityID<Int>> = reference("user_id", User, onDelete = ReferenceOption.CASCADE)
}