package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Posts
import xyz.webo.models.Users


object UserPost : Table() {
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val post: Column<EntityID<Int>> = reference("post_id", Posts, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(user, post)
}