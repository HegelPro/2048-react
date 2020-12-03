import {Codec, GetType} from 'purify-ts'
import {FieldSchema} from '../field'

export type FieldDataRecord = GetType<typeof FieldDataSchema>

export const FieldDataSchema = Codec.interface({
  current: FieldSchema,
  previous: FieldSchema,
})
