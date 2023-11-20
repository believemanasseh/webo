package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.datetime
import java.time.LocalDateTime

object Tokens : IntIdTable() {
    val value: Column<String> = varchar("value", 80).uniqueIndex()
    val isExpired: Column<Boolean> = bool("is_expired").default(false)
    val expirationTime: Column<LocalDateTime?> = datetime("expiration_time").nullable()
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE).uniqueIndex()
}