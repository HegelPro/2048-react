import {CellRecordSchema} from '../cell/schema'
import {GetType, array} from 'purify-ts'

export type FieldRecord = GetType<typeof FieldSchema>

export const FieldSchema = array(array(CellRecordSchema))
