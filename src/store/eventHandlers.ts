import { equals } from 'ramda';
import { DIRACTIONS } from '../models/vector/constants';
import { setCurrentFieldAction } from '../Containers/Game/actions';
import moveCellsThunk from '../Containers/Game/thunks/moveCells';
import debounce from '../utils/debounce';
import { Vector } from '../models/vector';
import { store } from '.';

const debouncedMoveCells = debounce(
  (vector: Vector) => (moveCellsThunk(vector) as any)(store.dispatch, store.getState),
  100,
)

window.addEventListener('keydown', (event) => {
  if (['w', 'ц', 'ArrowUp'].some(equals(event.key))) {
    debouncedMoveCells(DIRACTIONS.UP)
  }
  
  else if (['d', 'в', 'ArrowRight'].some(equals(event.key))) {
    debouncedMoveCells(DIRACTIONS.LEFT)
  }
  
  else if (['s', 'ы', 'ArrowDown'].some(equals(event.key))) {
    debouncedMoveCells(DIRACTIONS.DOWN)
  }
  
  else if (['a', 'ф', 'ArrowLeft'].some(equals(event.key))) {
    debouncedMoveCells(DIRACTIONS.RIGHT)
  }
})

window.addEventListener('keydown', (event) => {
  if (['Backspace'].some(equals(event.key))) {
    store.dispatch(setCurrentFieldAction(store.getState().field.previous))
  }
})