import {combineEpics} from 'redux-observable'
import {moveDiractionFromKeyboardEventEpic} from '../Containers/Game/epics/keyboardEpics'
import {moveFieldEpic} from '../Containers/Game/epics/moveCellsEpics'

export default combineEpics(
  moveDiractionFromKeyboardEventEpic,
  moveFieldEpic,
)
