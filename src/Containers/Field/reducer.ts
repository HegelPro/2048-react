import { ActionType, getType } from 'typesafe-actions'

import * as fieldActions from './actions'

import { FieldRecord } from '../../models/field'
import { Record } from 'immutable';

const defaultState = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
}

class FieldReduserStateRecord extends Record(defaultState) {}

export type FieldActions = ActionType<typeof fieldActions>

export default (state = new FieldReduserStateRecord(), action: FieldActions): FieldReduserStateRecord => {
  switch (action.type) {
    case getType(fieldActions.setCurrentField):
      return state.set('current', action.payload)
    case getType(fieldActions.setPreviousField):
      return state.set('previous', action.payload)
    default:
      return state
  }
}
