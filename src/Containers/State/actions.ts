import { RecordElementRecord } from '../../models/recordElement/schema'
import { createAction } from 'typesafe-actions'

export const setFieldRecordsAction = createAction('state/SET_RECORDS')<RecordElementRecord[]>()
