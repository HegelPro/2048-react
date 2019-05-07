import { combineEpics } from 'redux-observable'

import * as fieldEpics from '../Containers/Game/epics'
import * as fieldSettingsEpics from '../Containers/Settings/epics'

export default combineEpics(
  ...Object.values(fieldEpics),
  ...Object.values(fieldSettingsEpics),
)
