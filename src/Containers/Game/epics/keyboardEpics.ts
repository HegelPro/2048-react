import { fromEvent } from 'rxjs'
import {
  map,
  filter,
} from 'rxjs/operators'
import { DIRACTIONS } from '../../../models/vector/constants'
import { VectorHelpers } from '../../../models/vector'
import {
  moveCellsAction,
  returnPrevFieldAction,
} from '../actions'
import { Epic } from '../../../store/types'

const keyboard$ = fromEvent<KeyboardEvent>(window, 'keydown')

export const moveDiractionFromKeyboardEventEpic: Epic = () => keyboard$.pipe(
  map((event: KeyboardEvent) => {
    if (event.key === 'w' || event.key === 'ц' || event.key === 'ArrowUp') {
      return DIRACTIONS.UP
    } else if (event.key === 'd' || event.key === 'в' || event.key === 'ArrowRight') {
      return DIRACTIONS.LEFT
    } else if (event.key === 's' || event.key === 'ы' || event.key === 'ArrowDown') {
      return DIRACTIONS.DOWN
    } else if (event.key === 'a' || event.key === 'ф' || event.key === 'ArrowLeft') {
      return DIRACTIONS.RIGHT
    }
    return DIRACTIONS.NULL
  }),
  filter((diraction) => !VectorHelpers.equals(diraction)(DIRACTIONS.NULL)),
  map((diraction) => moveCellsAction(diraction)),
)

export const returnPrevFieldFromKeyboardEventEpic: Epic = () => keyboard$.pipe(
  map((event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      return true
    }
    return false
  }),
  filter((diraction) => diraction),
  map(() => returnPrevFieldAction()),
)
