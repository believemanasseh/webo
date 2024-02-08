package xyz.webo.utils

import io.ktor.server.application.*
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import kotlin.random.Random


fun getLogger(): Logger = LoggerFactory.getLogger(Application::class.java)


fun generateToken(): String {
    val hexChars = "0123456789abcdef"
    val random = Random.Default
    val stringBuilder = StringBuilder(64)

    repeat(64) {
        val randomIndex = random.nextInt(hexChars.length)
        val randomChar = hexChars[randomIndex]
        stringBuilder.append(randomChar)
    }

    return stringBuilder.toString()
}