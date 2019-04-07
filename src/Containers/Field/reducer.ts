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
      return state
        .update('history', history => history.push(state.current))
        .set('current', action.payload)
    default:
      return state
  }
}
