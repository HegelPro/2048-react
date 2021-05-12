export default {}
/*
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
*/