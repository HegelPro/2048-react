import { Codec } from 'purify-ts'
import { combineReducers } from 'redux'
import field, { defaultFieldState } from '../Containers/Game/reducer'
import settings, { defaultSettingsState } from '../Containers/Settings/reducer'
import state, { defaultFieldStateState } from '../Containers/State/reducer'
import { FieldDataSchema } from '../models/data/schema'
import { FieldSettingsSchema } from '../models/settings/schema'
import { FieldStateSchema } from '../models/state/schema'
import { RootState } from './types'

export const defaultRootState: RootState = {
  field: defaultFieldState,
  settings: defaultSettingsState,
  state: defaultFieldStateState,
}

const rootReducer = combineReducers({
  field,
  settings,
  state,
})

export const rootStateShcema = Codec.interface({
  field: FieldDataSchema,
  settings: FieldSettingsSchema,
  state: FieldStateSchema,
})

export default rootReducer
