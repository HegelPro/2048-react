import field from '../Containers/Field/reducer'
import settings from '../Containers/Settings/reducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  field,
  settings,
})

export default rootReducer
