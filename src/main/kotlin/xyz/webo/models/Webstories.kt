package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import xyz.webo.models.intermediaries.UserWebstory
import java.time.LocalDateTime


object Webstories : IntIdTable() {
    val text: Column<String> = varchar("text", 300)
    val rewebstoriesCount: Column<Int> = integer("rebwebstories_count").default(0)
    val likesCount: Column<Int> = integer("likes_count").default(0)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE)
}

class Webstory(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Webstory>(Webstories)

    var likedBy by User via UserWebstory
}