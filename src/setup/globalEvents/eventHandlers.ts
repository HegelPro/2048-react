import { DIRACTIONS } from '../../models/vector/constants'
import { setCurrentFieldAction } from '../../Containers/Game/actions'
import moveCellsThunk from '../../Containers/Game/thunks/moveCells'
import debounce from '../../utils/debounce'
import { Vector } from '../../models/vector'
import { store } from '../../store'
import { Just, Maybe, Nothing } from 'purify-ts'
import { handleGesture } from './helpers/handleGesture'

const debouncedMoveCells = debounce(
  (vector: Vector) => (moveCellsThunk(vector) as any)(store.dispatch, store.getState),
  100,
)

export const addMoveCellsHandlersFromKeydown = () =>
  window.addEventListener('keydown', (event) => {
    if (['w', 'ц', 'ArrowUp'].some(key => key === event.key)) {
      debouncedMoveCells(DIRACTIONS.UP)
    }
    
    else if (['d', 'в', 'ArrowRight'].some(key => key === event.key)) {
      debouncedMoveCells(DIRACTIONS.LEFT)
    }
    
    else if (['s', 'ы', 'ArrowDown'].some(key => key === event.key)) {
      debouncedMoveCells(DIRACTIONS.DOWN)
    }
    
    else if (['a', 'ф', 'ArrowLeft'].some(key => key === event.key)) {
      debouncedMoveCells(DIRACTIONS.RIGHT)
    }
  })

export const addReturnFieldHandlersFromKeydown = () => {
  window.addEventListener('keydown', (event) => {
    if (['Backspace'].some(key => key === event.key)) {
      store.dispatch(setCurrentFieldAction(store.getState().field.previous))
    }
  })
}

export const addMoveCellsHandlersFromMouse = () => {
  let eventDown: Maybe<MouseEvent> = Nothing

  window.addEventListener('mousedown', (event) => {
    eventDown = Just(event)
  })

  window.addEventListener('mouseup', (eventUp) => {
    const startPoint: Vector = {
      x: eventUp.screenX,
      y: eventUp.screenY,
    }

    eventDown
      .chain(({screenX, screenY}) => {
        const endPoint: Vector = {
          x: screenX,
          y: screenY,
        }
    
        return handleGesture(
          startPoint,
          endPoint,
        )
      })
      .ifJust((diraction) => {
        debouncedMoveCells(diraction)
        eventDown = Nothing
      })
  })
}

export const addMoveCellsHandlersFromTouch = () => {
  let eventDown: Maybe<TouchEvent> = Nothing

  window.addEventListener('touchstart', (event) => {
    eventDown = Just(event)
  })

  window.addEventListener('touchend', (eventUp) => {
    const startPoint: Vector = {
      x: eventUp.changedTouches[0].screenX,
      y: eventUp.changedTouches[0].screenY,
    }

    eventDown
      .chain(({changedTouches: {0: {screenX, screenY}}}) => {
        const endPoint: Vector = {
          x: screenX,
          y: screenY,
        }
    
        return handleGesture(
          startPoint,
          endPoint,
        )
      })
      .ifJust((diraction) => {
        debouncedMoveCells(diraction)
        eventDown = Nothing
      })
  })
}
