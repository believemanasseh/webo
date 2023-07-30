package xyz.webo.models

import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.javatime.date
import org.jetbrains.exposed.sql.statements.api.ExposedBlob
import java.time.LocalDate

object Profiles : IntIdTable() {
    val name: Column<String?> = varchar("name", 50).nullable()
    val bio: Column<String?> = varchar("bio", 50).nullable()
    val location: Column<String?> = varchar("location", 50).nullable()
    val website: Column<String?> = varchar("website", 100).nullable()
    val displayPicture: Column<ExposedBlob?> = blob("display_picture").nullable()
    val bannerPicture: Column<ExposedBlob?> = blob("banner_picture").nullable()
    val dateOfBirth: Column<LocalDate> = date("date_of_birth")
    val userId = reference("user_id", Users).uniqueIndex()
}