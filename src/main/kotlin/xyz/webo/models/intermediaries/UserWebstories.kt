package xyz.webo.models.intermediaries

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import xyz.webo.models.Users
import xyz.webo.models.Webstories


object UserWebstory : Table() {
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val webstory: Column<EntityID<Int>> = reference("webstory_id", Webstories, onDelete = ReferenceOption.CASCADE)
    override val primaryKey = PrimaryKey(user, webstory)
}