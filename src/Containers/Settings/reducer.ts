import {createReducer} from 'typesafe-actions'
import {FieldSettingsRecord} from '../../models/settings/schema'
import {RootActions} from '../../store/types'
import { setFieldSettingsAction } from './actions'

export const defaultSettingsState = {columns: 4, rows: 4}

export default createReducer<FieldSettingsRecord, RootActions>(defaultSettingsState)
  .handleAction(setFieldSettingsAction, (_, action) => action.payload)
