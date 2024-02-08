package xyz.webo

import io.github.cdimascio.dotenv.dotenv

val dotenv = dotenv()

object Config {
    // Database
    val DB_URL: String = dotenv.get("DB_URL")
    val DB_DRIVER: String = dotenv.get("DB_DRIVER")
    val DB_USER: String = dotenv.get("DB_USER")
    val DB_PASSWORD: String = dotenv.get("DB_PASSWORD")

    // Admin
    val ADMIN_USER_EMAIL: String = dotenv.get("ADMIN_USER_EMAIL")
    val ADMIN_USER_HANDLE: String = dotenv.get("ADMIN_USER_HANDLE")
    val ADMIN_USER_PASSWORD: String = dotenv.get("ADMIN_USER_PASSWORD")

    // Testing
    val TEST_DB_URL: String = dotenv.get("TEST_DB_URL")
    val TEST_SERVER_PORT: String = dotenv.get("TEST_SERVER_PORT")
}