import {GetType, array, maybe} from 'purify-ts'
import {CellRecordSchema} from '../cell/schema'

export type FieldRecord = GetType<typeof FieldSchema>

export const FieldSchema = array(array(maybe(CellRecordSchema)))
