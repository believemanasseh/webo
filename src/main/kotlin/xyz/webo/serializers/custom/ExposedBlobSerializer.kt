package xyz.webo.serializers.custom

//object ExposedBlobSerializer : KSerializer<ExposedBlob> {
//    override fun serialize(encoder: Encoder, value: ExposedBlob) {
//        encoder.encodeBytes(value.bytes)
//    }
//
//    override val descriptor: SerialDescriptor
//        get() = TODO("Not yet implemented")
//
//    override fun deserialize(decoder: Decoder): ExposedBlob {
//        val bytes = decoder.decodeBytes()
//        return ExposedBlob(bytes)
//    }
//}