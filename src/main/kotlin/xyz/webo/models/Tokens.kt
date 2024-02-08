package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption

object Tokens : IntIdTable() {
    val value: Column<String> = varchar("value", 80).uniqueIndex()
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE).uniqueIndex()
}

class Token(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Token>(Tokens)

    var value by Tokens.value
    var user by User referencedOn Tokens.user
}