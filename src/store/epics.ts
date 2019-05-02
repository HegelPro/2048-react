import { combineEpics } from 'redux-observable'

import * as fieldEpics from '../Containers/Field/epics'
import * as fieldSettingsEpics from '../Containers/Settings/epics'

export default combineEpics(
  ...Object.values(fieldEpics),
  ...Object.values(fieldSettingsEpics),
)
