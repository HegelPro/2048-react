import {GetType, array} from 'purify-ts'
import { RecordElementSchema } from '../recordElement/schema'

export type FieldStateRecord = GetType<typeof FieldStateSchema>

export const FieldStateSchema = array(RecordElementSchema)
