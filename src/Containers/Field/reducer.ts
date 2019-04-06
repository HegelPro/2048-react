import { ActionType, getType } from 'typesafe-actions'

import * as field from './actions'

import { FieldRecord } from '../../models/field'

const defaultState = new FieldRecord()

export type FieldAction = ActionType<typeof field>

export default (state = defaultState, action: FieldAction): FieldRecord => {
  switch (action.type) {
    case getType(field.setField):
      return action.payload
    default:
      return state
  }
}
