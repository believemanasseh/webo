package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption

object Token : IntIdTable() {
    val value: Column<String> = varchar("value", 80).uniqueIndex()
    val user: Column<EntityID<Int>> = reference("user_id", User, onDelete = ReferenceOption.CASCADE).uniqueIndex()
}