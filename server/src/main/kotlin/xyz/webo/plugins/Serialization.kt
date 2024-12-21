package xyz.webo.plugins

import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.plugins.contentnegotiation.*
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.contextual
import xyz.webo.serializers.custom.EntityIDSerializer
import xyz.webo.serializers.custom.LocalDateTimeSerializer


fun Application.configureSerialization() {
    install(ContentNegotiation) {
        json()
    }
}

fun configureEntityIDSerialization(): Json {
    val module = SerializersModule {
        contextual(EntityIDSerializer)
        contextual(LocalDateTimeSerializer)
    }

    return Json { serializersModule = module }
}
