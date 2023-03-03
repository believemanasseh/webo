package xyz.webo.models

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.Table

import java.time.LocalDateTime

object Users : Table() {
    private val id: Column<Int> = integer("id").autoIncrement()
    val name: Column<String> = varchar("name", 50)
    val email: Column<String> = varchar("email", 50)
//    val dateCreated: Column<LocalDateTime> = datetime(name="date created")
//    val dateModified: Column<LocalDateTime> = datetime(name="date modified")

    override val primaryKey = PrimaryKey(id)
}