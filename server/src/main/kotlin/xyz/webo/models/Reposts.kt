package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption


object Repost : IntIdTable() {
    val user: Column<EntityID<Int>> = reference("user_id", User, onDelete = ReferenceOption.CASCADE)
    val post: Column<EntityID<Int>> = reference("post_id", Post, onDelete = ReferenceOption.CASCADE)
}
