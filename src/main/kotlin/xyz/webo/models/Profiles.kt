package xyz.webo.models

import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.date
import java.time.LocalDate


object Profile : IntIdTable() {
    val name: Column<String?> = varchar("name", 50).nullable()
    val bio: Column<String?> = varchar("bio", 50).nullable()
    val location: Column<String?> = varchar("location", 50).nullable()
    val website: Column<String?> = varchar("website", 100).nullable()
    val displayPicture: Column<String?> = varchar("display_picture", 100).nullable()
    val bannerPicture: Column<String?> = varchar("banner_picture", 100).nullable()
    val dateOfBirth: Column<LocalDate> = date("date_of_birth")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE).uniqueIndex()
}