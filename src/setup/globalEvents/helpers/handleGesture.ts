import { Just, Maybe, Nothing } from "purify-ts"
import { Vector, VectorHelpers } from "../../../models/vector"
import { DIRACTIONS } from "../../../models/vector/constants"

export function handleGesture(
  startPoint: Vector,
  endPoint: Vector,
): Maybe<Vector> {
  const pageWidth = window.innerWidth || document.body.clientWidth
  const treshold = Math.max(1, Math.floor(0.01 * (pageWidth)))
  const limit = Math.tan(45 * 1.5 / 180 * Math.PI)

  const moveVector = VectorHelpers.minus(endPoint)(startPoint)

  const xy = Math.abs(moveVector.x / moveVector.y)
  const yx = Math.abs(moveVector.y / moveVector.x)

  if (Math.abs(moveVector.x) > treshold || Math.abs(moveVector.y) > treshold) {
    if (yx <= limit) {
      if (moveVector.x < 0) {
        return Just(DIRACTIONS.RIGHT)
      } else {
        return Just(DIRACTIONS.LEFT)
      }
    }
    if (xy <= limit) {
      if (moveVector.y < 0) {
        return Just(DIRACTIONS.UP)
      } else {
        return Just(DIRACTIONS.DOWN)
      }
    }
  }
  return Nothing
}
