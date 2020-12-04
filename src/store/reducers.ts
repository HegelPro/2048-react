import { Codec } from 'purify-ts'
import { combineReducers } from 'redux'
import field from '../Containers/Game/reducer'
import settings from '../Containers/Settings/reducer'
import state from '../Containers/State/reducer'
import { FieldDataSchema } from '../models/data/schema'
import { FieldSettingsSchema } from '../models/settings/schema'
import { FieldStateSchema } from '../models/state/schema'

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
