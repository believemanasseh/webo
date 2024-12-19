package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Comment
import xyz.webo.models.User


object UserComment : Table() {
    private val comment: Column<EntityID<Int>> = reference("comment_id", Comment, onDelete = ReferenceOption.CASCADE)
    val user: Column<EntityID<Int>> = reference("user_id", User, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(comment, user, name = "PK_UserComments")
}