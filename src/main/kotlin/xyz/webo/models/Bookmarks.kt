package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime


object Bookmark : IntIdTable() {
    val created: Column<LocalDateTime> = datetime("created")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val webstory: Column<EntityID<Int>> = reference("webstory_id", Webstories, onDelete = ReferenceOption.CASCADE)
}