import { ActionType, getType } from 'typesafe-actions'

import * as fieldSettingActions from './actions'

import { Record } from 'immutable';

const defaultState = {
  rows: 4,
  columns: 4,
}

class FieldSettingStateRecord extends Record(defaultState) {}

export type FieldAction = ActionType<typeof fieldSettingActions>

export default (state = new FieldSettingStateRecord(), action: FieldAction): FieldSettingStateRecord => {
  switch (action.type) {
    case (getType(fieldSettingActions.setFieldRowsAction)):
      return state.set('rows', action.payload)
    case (getType(fieldSettingActions.setFieldColumnsAction)):
      return state.set('columns', action.payload)
    default:
      return state
  }
}
