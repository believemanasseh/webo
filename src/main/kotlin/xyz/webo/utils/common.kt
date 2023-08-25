package xyz.webo.utils

import io.ktor.server.application.*
import org.slf4j.Logger
import org.slf4j.LoggerFactory

// Retrieve logger instance
fun getLogger(): Logger = LoggerFactory.getLogger(Application::class.java)
