package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Post
import xyz.webo.models.User


object UserPost : Table() {
    val user: Column<EntityID<Int>> = reference("user_id", User, onDelete = ReferenceOption.CASCADE)
    val post: Column<EntityID<Int>> = reference("post_id", Post, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(user, post, name = "PK_UserPosts")
}