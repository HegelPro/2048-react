import { ActionType, getType } from 'typesafe-actions'

import { FieldSettingsRecord } from '../../models/settings'

import * as fieldSettingActions from './actions'

export type FieldAction = ActionType<typeof fieldSettingActions>

export default (state = new FieldSettingsRecord(), action: FieldAction): FieldSettingsRecord => {
  switch (action.type) {
    case (getType(fieldSettingActions.setFieldRowsAction)):
      return state.set('rows', action.payload)
    case (getType(fieldSettingActions.setFieldColumnsAction)):
      return state.set('columns', action.payload)
    default:
      return state
  }
}
