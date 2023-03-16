package xyz.webo.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.javatime.datetime
import org.jetbrains.exposed.sql.statements.api.ExposedBlob
import java.time.LocalDateTime

object Profiles : IntIdTable() {
    val name: Column<String> = varchar("name", 50)
    val bio: Column<String?> = varchar("bio", 50).nullable()
    val location: Column<String?> = varchar("location", 50).nullable()
    val website: Column<String?> = varchar("website", 100).nullable()
    val displayPicture: Column<ExposedBlob?> = blob("display picture").nullable()
    val bannerPicture: Column<ExposedBlob?> = blob("banner picture").nullable()
    val dateOfBirth: Column<LocalDateTime?> = datetime("date of birth").nullable()
    val userId = integer("user id").references(Users.id)
}