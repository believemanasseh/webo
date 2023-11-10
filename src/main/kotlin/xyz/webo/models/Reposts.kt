package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption


object Reposts : IntIdTable() {
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val post: Column<EntityID<Int>> = reference("post_id", Webstories, onDelete = ReferenceOption.CASCADE)

    init {
        uniqueIndex(user, post)
    }
}

class Repost(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Repost>(Reposts)

    var comments by Comment via CommentRepost
}