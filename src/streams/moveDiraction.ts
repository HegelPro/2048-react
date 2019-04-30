import { fromEvent } from 'rxjs'
import {
  map,
  filter,
} from 'rxjs/operators'
import { DIRACTIONS } from '../models/vector/constants'
import { moveCells } from '../Containers/Field/actions'
import { Epic } from '../store/types'

export const moveDiractionFromKeyboardEventEpic: Epic = () => fromEvent<KeyboardEvent>(window, 'keydown').pipe(
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
  filter((diraction) => !diraction.equals(DIRACTIONS.NULL)),
  map((diraction) => moveCells(diraction)),
)
