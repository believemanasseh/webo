//package xyz.webo.serializers
//
//import kotlinx.serialization.KSerializer
//import kotlinx.serialization.Serializer
//import kotlinx.serialization.builtins.MapSerializer
//import kotlinx.serialization.descriptors.SerialDescriptor
//import kotlinx.serialization.encoding.Decoder
//import kotlinx.serialization.encoding.Encoder
//
//@Serializer(forClass = LinkedHashMap::class)
//object LinkedHashMapSerializer : KSerializer<LinkedHashMap<*, *>> {
//    override val descriptor: SerialDescriptor = MapDescriptor
//
//    override fun serialize(encoder: Encoder, value: LinkedHashMap<*, *>) {
//        encoder.encodeSerializableValue(MapSerializer(AnySerializer(), AnySerializer()), value)
//    }
//
//    override fun deserialize(decoder: Decoder): LinkedHashMap<*, *> {
//        return decoder.decodeSerializableValue(MapSerializer(AnySerializer(), AnySerializer()))
//    }
//}