import { List } from 'immutable'
import { createStandardAction } from 'typesafe-actions'

import { RecordElementRecord } from '../../models/recordElement'

export const setFieldRecordsAction = createStandardAction('state/SET_RECORDS')<List<RecordElementRecord>>()
