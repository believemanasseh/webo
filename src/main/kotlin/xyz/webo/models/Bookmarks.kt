package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime


object Bookmarks : IntIdTable() {
    val created: Column<LocalDateTime> = datetime("created")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val post: Column<EntityID<Int>> = reference("post_id", Posts, onDelete = ReferenceOption.CASCADE)
}

class Bookmark(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Bookmark>(Bookmarks)

    var created by Bookmarks.created
    var user by User referencedOn Bookmarks.user
    var post by Post referencedOn Bookmarks.post
}

