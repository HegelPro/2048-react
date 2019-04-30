import { combineEpics } from 'redux-observable'

import * as fieldEpic from '../Containers/Field/epic'
import { moveDiractionFromKeyboardEventEpic } from '../streams/moveDiraction'

export default combineEpics(
  ...Object.values(fieldEpic),
  moveDiractionFromKeyboardEventEpic,
)
