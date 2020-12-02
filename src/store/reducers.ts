import { combineReducers } from 'redux'
import field from '../Containers/Game/reducer'
import settings from '../Containers/Settings/reducer'
import state from '../Containers/State/reducer'

const rootReducer = combineReducers({
  field,
  settings,
  state,
})

export default rootReducer
