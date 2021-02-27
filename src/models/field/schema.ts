import {CellRecordSchema} from '../cell/schema'
import {Codec, GetType, number, array} from 'purify-ts'

export type FieldRecord = GetType<typeof FieldSchema>

export const FieldSchema = Codec.interface({
  columns: number,
  rows: number,
  cells: array(array(CellRecordSchema)),
})
