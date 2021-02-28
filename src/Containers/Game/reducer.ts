import { setCurrentFieldAction, setPreviousFieldAction } from './actions'
import { FieldDataRecord } from '../../models/data/schema'
import FieldHelpers from '../../models/field/helpers'
import { RootActions } from '../../store/types'
import { createReducer } from 'typesafe-actions'
import { defaultSettingsState } from '../Settings/reducer'

const defaultField = FieldHelpers.createStart(defaultSettingsState)

export const defaultFieldState: FieldDataRecord = {
  current: defaultField,
  previous: defaultField,
}

export default createReducer<FieldDataRecord, RootActions>(defaultFieldState)
  .handleAction(setCurrentFieldAction, (state, action) => ({...state, current: action.payload}))
  .handleAction(setPreviousFieldAction, (state, action) => ({...state, previous: action.payload}))
