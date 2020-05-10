import { fromEvent } from 'rxjs'
import {
  map,
  filter,
} from 'rxjs/operators'
import { DIRACTIONS } from '../../../models/vector/constants'
import { VectorHelpers } from '../../../models/vector'
import { moveCellsAction } from '../actions'
import { Epic } from '../../../store/types'
import { equals, not } from 'ramda'
import { compose } from 'redux'

const keyboard$ = fromEvent<KeyboardEvent>(window, 'keydown')

export const moveDiractionFromKeyboardEventEpic: Epic = () => keyboard$.pipe(
  map((event: KeyboardEvent) => {
    if (['w', 'ц', 'ArrowUp'].some(equals(event.key))) {
      return DIRACTIONS.UP
    } else if (['d', 'в', 'ArrowRight'].some(equals(event.key))) {
      return DIRACTIONS.LEFT
    } else if (['s', 'ы', 'ArrowDown'].some(equals(event.key))) {
      return DIRACTIONS.DOWN
    } else if (['a', 'ф', 'ArrowLeft'].some(equals(event.key))) {
      return DIRACTIONS.RIGHT
    }
    return DIRACTIONS.NULL
  }),
  filter(compose(not, VectorHelpers.equals(DIRACTIONS.NULL))),
  map(moveCellsAction),
)

// TODO сделать setCurrentFeald
// export const returnPrevFieldFromKeyboardEventEpic: Epic = () => keyboard$.pipe(
//   map((event: KeyboardEvent) => {
//     if (event.key === 'Backspace') {
//       return true
//     }
//     return false
//   }),
//   filter(Boolean),
//   map(() => returnPrevFieldAction()),
// )
