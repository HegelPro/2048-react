import { Codec, GetType, number } from 'purify-ts'

export type Vector = GetType<typeof VectorSchema>

export const VectorSchema = Codec.interface({
  x: number,
  y: number,
})
