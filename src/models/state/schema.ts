import { RecordElementSchema } from '../recordElement/schema'
import {array, GetType} from 'purify-ts'

export type FieldStateRecord = GetType<typeof FieldStateSchema>

export const FieldStateSchema = array(RecordElementSchema)
