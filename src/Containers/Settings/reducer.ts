import { ActionType, createReducer } from 'typesafe-actions'

import { FieldSettingsRecord } from '../../models/settings'

import * as fieldSettingActions from './actions'

export type FieldAction = ActionType<typeof fieldSettingActions>

export default createReducer<FieldSettingsRecord, FieldAction>(FieldSettingsRecord.of({
  rows: 4,
  columns: 4
}))
  .handleAction(fieldSettingActions.setFieldSettingsAction, (_, action) => FieldSettingsRecord.of(action.payload))
  // .handleAction(fieldSettingActions.setFieldRowsAction, (state, action) => state.set('rows', action.payload))
  // .handleAction(fieldSettingActions.setFieldColumnsAction, (state, action) => state.set('columns', action.payload))
