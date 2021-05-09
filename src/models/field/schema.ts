import {GetType, array, optional} from 'purify-ts'
import {CellRecordSchema} from '../cell/schema'

export type FieldRecord = GetType<typeof FieldSchema>

export const FieldSchema = array(array(optional(CellRecordSchema)))
