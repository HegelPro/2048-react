import { ActionType, createReducer } from 'typesafe-actions'

import { FieldDataRecord } from '../../models/data'

import * as fieldActions from './actions'
import { FieldRecordHelper } from '../../models/field'

export type FieldActions = ActionType<typeof fieldActions>


export default createReducer<FieldDataRecord, FieldActions>({
  current: FieldRecordHelper.zero,
  previous: FieldRecordHelper.zero,
})
  .handleAction(fieldActions.setCurrentFieldAction, (state, action) => ({...state, current: action.payload}))
  .handleAction(fieldActions.setPreviousFieldAction, (state, action) => ({...state, previous: action.payload}))
