import { ActionType, getType } from 'typesafe-actions'

import { FieldDataRecord } from '../../models/data'

import * as fieldActions from './actions'

export type FieldActions = ActionType<typeof fieldActions>

export default (state = new FieldDataRecord(), action: FieldActions): FieldDataRecord => {
  switch (action.type) {
    case getType(fieldActions.setCurrentFieldAction):
      return state
        .set('current', action.payload)
        .updateRecordValue(action.payload)
    case getType(fieldActions.setPreviousFieldAction):
      return state.set('previous', action.payload)
    default:
      return state
  }
}
