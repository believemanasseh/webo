package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import xyz.webo.models.intermediaries.CommentRewebstory
import xyz.webo.models.intermediaries.UserComment
import java.time.LocalDateTime

object Comments : IntIdTable() {
    val text: Column<String> = varchar("text", 300)
    val likesCount: Column<Int> = integer("likes_count").default(0)
    val rewebstoriesCount: Column<Int> = integer("rewebstories_count").default(0)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
}

class Comment(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Comment>(Comments)

    var rewebstories by Rewebstory via CommentRewebstory
    var likedBy by User via UserComment
}