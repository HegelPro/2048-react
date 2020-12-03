import { Codec } from 'purify-ts'
import { combineReducers } from 'redux'
import field from '../Containers/Game/reducer'
import settings, { SettingsShcema } from '../Containers/Settings/reducer'
import state from '../Containers/State/reducer'
import { FieldDataSchema } from '../models/data'
import { FieldStateSchema } from '../models/state'

const rootReducer = combineReducers({
  field,
  settings,
  state,
})

export const rootStateShcema = Codec.interface({
  field: FieldDataSchema,
  settings: SettingsShcema,
  state: FieldStateSchema,
})

export default rootReducer
