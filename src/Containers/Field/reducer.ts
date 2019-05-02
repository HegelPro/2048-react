import { ActionType, getType } from 'typesafe-actions'

import { FieldStateRecord } from '../../models/fieldState'

import * as fieldActions from './actions'

export type FieldActions = ActionType<typeof fieldActions>

export default (state = new FieldStateRecord(), action: FieldActions): FieldStateRecord => {
  switch (action.type) {
    case getType(fieldActions.setCurrentFieldAction):
      return state.set('current', action.payload)
    case getType(fieldActions.setPreviousFieldAction):
      return state.set('previous', action.payload)
    default:
      return state
  }
}
