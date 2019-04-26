import { combineEpics } from 'redux-observable'

import * as fieldEpic from '../Containers/Field/epic'

export default combineEpics(
  ...Object.values(fieldEpic),
)
