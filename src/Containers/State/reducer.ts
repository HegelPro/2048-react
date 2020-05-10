import { ActionType, createReducer } from 'typesafe-actions'

import { FieldStateRecord } from '../../models/state'
import actions from '../../store/actions'

export type Actions = ActionType<typeof actions>

export default createReducer<FieldStateRecord, Actions>(new FieldStateRecord())
  .handleAction(actions.field.setCurrentFieldAction, (state, action) => state.updateRecordValue(action.payload))
  .handleAction(actions.state.setFieldRecordsAction, (state, action) => state.set('records', action.payload))
