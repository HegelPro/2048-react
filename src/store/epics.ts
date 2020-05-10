import { combineEpics } from 'redux-observable'

import {moveDiractionFromKeyboardEventEpic} from '../Containers/Game/epics/keyboardEpics'
import {initFieldEpic} from '../Containers/Game/epics/initEpics'
import { moveFieldEpic } from '../Containers/Game/epics/moveCellsEpics'

export default combineEpics(
  moveDiractionFromKeyboardEventEpic,
  initFieldEpic,
  moveFieldEpic,
)
