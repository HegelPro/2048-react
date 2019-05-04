import { ActionType, getType } from 'typesafe-actions'

import { FieldStateRecord } from '../../models/state'
import actions from '../../store/actions'

export type Actions = ActionType<typeof actions>

export default (state = new FieldStateRecord(), action: Actions): FieldStateRecord => {
  switch (action.type) {
    case getType(actions.field.setCurrentFieldAction):
      return state.updateRecordValue(action.payload)
    case getType(actions.state.setFieldRecordsAction):
      return state.set('records', action.payload)
    default:
      return state
  }
}
