package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import xyz.webo.models.intermediaries.CommentRewebstory


object Rewebstories : IntIdTable() {
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
    val webstory: Column<EntityID<Int>> = reference("webstory_id", Webstories, onDelete = ReferenceOption.CASCADE)

    init {
        uniqueIndex(user, webstory)
    }
}

class Rewebstory(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Rewebstory>(Rewebstories)

    var comments by Comment via CommentRewebstory
}