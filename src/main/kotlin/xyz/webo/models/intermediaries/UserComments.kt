package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Comments
import xyz.webo.models.Users

object UserComment : Table() {
    val comment: Column<EntityID<Int>> = reference("comment_id", Comments, onDelete = ReferenceOption.CASCADE)
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(comment, user)
}