package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import xyz.webo.models.intermediaries.UserPosts
import java.time.LocalDateTime


object Posts : IntIdTable() {
    val text: Column<String> = varchar("text", 300)
    val repostsCount: Column<Int> = integer("reposts_count").default(0)
    val likesCount: Column<Int> = integer("likes_count").default(0)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
}

class Post(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Post>(Posts)

    var text by Posts.text
    var repostsCount by Posts.repostsCount
    var likesCount by Posts.likesCount
    var dateCreated by Posts.dateCreated
    var user by User referencedOn Posts.user
    var likedBy by User via UserPosts
}