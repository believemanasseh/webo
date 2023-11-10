package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Comments
import xyz.webo.models.Reposts


object CommentRepost : Table() {
    val repost: Column<EntityID<Int>> =
        reference("repost_id", Reposts, onDelete = ReferenceOption.CASCADE)
    val comment: Column<EntityID<Int>> = reference("comment_id", Comments, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(repost, comment)
}