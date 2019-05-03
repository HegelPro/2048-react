import field from '../Containers/Field/reducer'
import settings from '../Containers/Settings/reducer'
import state from '../Containers/State/reducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  field,
  settings,
  state,
})

export default rootReducer
