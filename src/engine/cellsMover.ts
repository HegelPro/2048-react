import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord } from '../models/field'
import { Vector, VectorHelpers } from '../models/vector'

const cellsMover = (diraction: Vector) => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const Deg90 = Math.PI / 2
  const topDiraction = VectorHelpers.turn(Deg90, 1)(diraction)
  const moveTop = VectorHelpers.plus(topDiraction)

  return (field: FieldRecord): FieldRecord =>
  {
    let iterPoint = selectIterationStartPoint(diraction)(field)


    let postIterPoint: Vector
    while (field.hasCell(iterPoint)) {
      postIterPoint = iterPoint

      if (field.hasCell(moveRight(iterPoint))) {
        iterPoint = moveRight(iterPoint)

        while (
          field.getCell(iterPoint).value > 0
          && field.getCell(postIterPoint).value === 0
        ) {
          field = field.swapeCells(postIterPoint, iterPoint)

          while (field.hasCell(moveLeft(iterPoint))) {
            iterPoint = moveLeft(iterPoint)
          }
        }
      } else {
        iterPoint = moveTop(iterPoint)

        while (field.hasCell(moveLeft(iterPoint))) {
          iterPoint = moveLeft(iterPoint)
        }
      }
    }

    return field
  }
}
  

export default cellsMover
