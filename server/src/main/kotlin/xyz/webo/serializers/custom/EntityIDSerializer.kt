package xyz.webo.serializers.custom

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import org.jetbrains.exposed.dao.id.EntityID
import xyz.webo.models.Users


object EntityIDSerializer : KSerializer<EntityID<Int>> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("EntityID<Int>", PrimitiveKind.INT)
    override fun serialize(encoder: Encoder, value: EntityID<Int>) = encoder.encodeInt(value.toString().toInt())

    override fun deserialize(decoder: Decoder) = EntityID(decoder.decodeInt(), Users)
}


