import { List } from 'immutable'
import { createAction } from 'typesafe-actions'

import { RecordElementRecord } from '../../models/recordElement'

export const setFieldRecordsAction = createAction('state/SET_RECORDS')<List<RecordElementRecord>>()
