import { ActionType, createReducer } from 'typesafe-actions'

import { FieldStateRecord, FieldStateRecordHelper } from '../../models/state'
import actions from '../../store/actions'
import {setFieldRecordsAction} from './actions'

export type Actions = ActionType<typeof actions>

export default createReducer<FieldStateRecord, Actions>([])
  .handleAction(actions.field.setCurrentFieldAction, (state, action) => FieldStateRecordHelper.updateRecordValue(state, action.payload))
  .handleAction(setFieldRecordsAction, (_, action) => (action.payload))
