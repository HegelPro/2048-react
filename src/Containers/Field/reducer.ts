import { ActionType, getType } from 'typesafe-actions'

import * as field from './actions'

import { FieldRecord } from '../../models/field'
import { Record, List } from 'immutable';

const defaultState = {
  current: new FieldRecord(),
  history: List<FieldRecord>(),
}

class FieldReduserStateRecord extends Record(defaultState) {}

export type FieldAction = ActionType<typeof field>

export default (state = new FieldReduserStateRecord(), action: FieldAction): FieldReduserStateRecord => {
  switch (action.type) {
    case getType(field.setField):
      return state.set('current', action.payload)
    case getType(field.resetFieldHistory):
      return state.set('history', defaultState.history)
    case getType(field.addFieldInHistory):
      return state.update('history', history => history.push(action.payload))
    case getType(field.remoteLostFieldInHistory):
      return state.update('history', history => history.pop())
    default:
      return state
  }
}
