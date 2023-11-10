package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.javatime.datetime
import xyz.webo.models.intermediaries.UserPost
import java.time.LocalDateTime


object Users : IntIdTable() {
    val handle: Column<String> = varchar("handle", 50).uniqueIndex()
    val email: Column<String> = varchar("email", 50).uniqueIndex()
    val password: Column<String> = varchar("password", 100)
    val dateCreated: Column<LocalDateTime> = datetime("date_created")
    val dateModified: Column<LocalDateTime> = datetime("date_modified")
}

class User(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<User>(Users)

    var webstories by Post via UserPost
}