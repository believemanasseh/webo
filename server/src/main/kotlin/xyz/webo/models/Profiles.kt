package xyz.webo.models

import org.jetbrains.exposed.dao.IntEntity
import org.jetbrains.exposed.dao.IntEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import org.jetbrains.exposed.dao.id.IntIdTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.date
import xyz.webo.models.intermediaries.UserPosts
import java.time.LocalDate


object Profiles : IntIdTable() {
    val name: Column<String?> = varchar("name", 50).nullable()
    val bio: Column<String?> = varchar("bio", 50).nullable()
    val location: Column<String?> = varchar("location", 50).nullable()
    val website: Column<String?> = varchar("website", 100).nullable()
    val displayPicture: Column<String?> = varchar("display_picture", 100).nullable()
    val bannerPicture: Column<String?> = varchar("banner_picture", 100).nullable()
    val dateOfBirth: Column<LocalDate> = date("date_of_birth")
    val user: Column<EntityID<Int>> = reference("user_id", Users, onDelete = ReferenceOption.CASCADE).uniqueIndex()
}

class Profile(id: EntityID<Int>) : IntEntity(id) {
    companion object : IntEntityClass<Profile>(Profiles)

    var name by Profiles.name
    var bio by Profiles.bio
    var location by Profiles.location
    var websites by Profiles.website
    var displayPicture by Profiles.displayPicture
    var bannerPicture by Profiles.bannerPicture
    var dateOfBirth by Profiles.dateOfBirth
    var user by User referencedOn Profiles.user
    var posts by Post via UserPosts
}