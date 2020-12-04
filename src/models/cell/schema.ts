import { Codec, GetType, number } from 'purify-ts'

export type CellRecord = GetType<typeof CellRecordSchema>

export const CellRecordSchema = Codec.interface({
  value: number,
  id: number,
  renderId: number,
})
