import { fromEvent } from 'rxjs'
import {
  map,
  filter,
  switchMap,
} from 'rxjs/operators'

import { DIRACTIONS } from '../../../models/vector/constants'
import { Epic } from '../../../store/types'
import { moveCellsAction } from '../actions'
import { VectorRecord } from '../../../models/vector'

const mouse$ = fromEvent<MouseEvent>(window, 'mousedown')

export const moveDiractionFromMouseEventEpic: Epic = () => mouse$.pipe(
  switchMap((eventDown) => fromEvent<MouseEvent>(window, 'mouseup').pipe(
    map((eventUp) => ({ eventUp, eventDown })),
  )),
  map(({ eventUp, eventDown }) => {
    const startPoint = new VectorRecord({
      x: eventUp.screenX,
      y: eventUp.screenY,
    })
    const endPoint = new VectorRecord({
      x: eventDown.screenX,
      y: eventDown.screenY,
    })

    return handleGesture(
      startPoint,
      endPoint,
    )
  }),
  filter((diraction) => !diraction.equals(DIRACTIONS.NULL)),
  map((diraction) => moveCellsAction(diraction)),
)

const touch$ = fromEvent<TouchEvent>(window, 'touchstart')

export const moveDiractionFromTouchEventEpic: Epic = () => touch$.pipe(
  switchMap((eventDown) => fromEvent<TouchEvent>(window, 'touchend').pipe(
    map((eventUp) => ({ eventUp, eventDown })),
  )),
  map(({ eventUp, eventDown }) => {
    const startPoint = new VectorRecord({
      x: eventUp.changedTouches[0].screenX,
      y: eventUp.changedTouches[0].screenY,
    })
    const endPoint = new VectorRecord({
      x: eventDown.changedTouches[0].screenX,
      y: eventDown.changedTouches[0].screenY,
    })

    return handleGesture(
      startPoint,
      endPoint,
    )
  }),
  filter((diraction) => !diraction.equals(DIRACTIONS.NULL)),
  map((diraction) => moveCellsAction(diraction)),
)

function handleGesture(
  startPoint: VectorRecord,
  endPoint: VectorRecord,
) {
  const pageWidth = window.innerWidth || document.body.clientWidth
  const treshold = Math.max(1, Math.floor(0.01 * (pageWidth)))
  const limit = Math.tan(45 * 1.5 / 180 * Math.PI)

  const moveVector = endPoint.minus(startPoint)

  const xy = Math.abs(moveVector.x / moveVector.y)
  const yx = Math.abs(moveVector.y / moveVector.x)

  if (Math.abs(moveVector.x) > treshold || Math.abs(moveVector.y) > treshold) {
    if (yx <= limit) {
      if (moveVector.x < 0) {
        return DIRACTIONS.LEFT
      } else {
        return DIRACTIONS.RIGHT
      }
    }
    if (xy <= limit) {
      if (moveVector.y < 0) {
        return DIRACTIONS.DOWN
      } else {
        return DIRACTIONS.UP
      }
    }
  }
  return DIRACTIONS.NULL
}
