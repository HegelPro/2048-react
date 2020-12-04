import { createAction } from 'typesafe-actions'

import { RecordElementRecord } from '../../models/recordElement/schema'

export const setFieldRecordsAction = createAction('state/SET_RECORDS')<RecordElementRecord[]>()
