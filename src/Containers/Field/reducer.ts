import { ActionType, getType } from 'typesafe-actions'

import * as field from './actions'

import { FieldRecord } from '../../models/field'
import { Record, List } from 'immutable';

const defaultState = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
}

class FieldReduserStateRecord extends Record(defaultState) {}

export type FieldAction = ActionType<typeof field>

export default (state = new FieldReduserStateRecord(), action: FieldAction): FieldReduserStateRecord => {
  switch (action.type) {
    case getType(field.setCurrentField):
      return state.set('current', action.payload)
    case getType(field.setPreviousField):
      return state.set('previous', action.payload)
    default:
      return state
  }
}
