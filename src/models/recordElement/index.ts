import { Codec, GetType, number } from 'purify-ts'
import { VectorSchema } from '../vector'

export type RecordElementRecord = GetType<typeof RecordElementSchema>

export const RecordElementSchema = Codec.interface({
  position: VectorSchema,
  value: number,
})
