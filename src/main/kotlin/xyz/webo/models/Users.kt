package xyz.webo.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.*
import java.time.LocalDateTime
import org.jetbrains.exposed.sql.javatime.datetime

object User : IntIdTable() {
    val handle: Column<String> = varchar("handle", 50).uniqueIndex()
    val email: Column<String> = varchar("email", 50).uniqueIndex()
    val password: Column<String> = varchar("password", 50)
    val dateCreated: Column<LocalDateTime> = datetime("date created")
    val dateModified: Column<LocalDateTime> = datetime("date modified")
    val following = reference("following", User).nullable()
    val followers = reference("followers", User).nullable()
}