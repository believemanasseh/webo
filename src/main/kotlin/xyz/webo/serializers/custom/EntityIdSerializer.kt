package xyz.webo.serializers

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.models.Users

object EntityIdSerializer : KSerializer<EntityID<Int>> {
    override fun serialize(encoder: Encoder, value: EntityID<Int>) {
        encoder.encodeInt(value.value)
    }

    override val descriptor: SerialDescriptor
        get() = TODO("Not yet implemented")

    override fun deserialize(decoder: Decoder): EntityID<Int> {
        return EntityID(decoder.decodeInt(), Users)
    }
}