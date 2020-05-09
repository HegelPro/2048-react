import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord } from '../models/field'
import { Vector, VectorHelpers } from '../models/vector'

const cellsColitions = (diraction: Vector) =>
  {
    const moveRight = VectorHelpers.plus(diraction)
    const moveLeft = VectorHelpers.minus(diraction)
    const Deg90 = Math.PI / 2
    const topDiraction = VectorHelpers.turn(Deg90, 1)(diraction)
    const moveTop = VectorHelpers.plus(topDiraction)
    
    return (field: FieldRecord) =>
      {
        let iterPoint = selectIterationStartPoint(diraction)(field)

        let postIterPoint: Vector
        while (field.hasCell(iterPoint)) {
          postIterPoint = iterPoint

          if (field.hasCell(moveRight(iterPoint))) {
            iterPoint = moveRight(iterPoint)

            if (
              field.getCell(iterPoint).value > 0 &&
              field.getCell(postIterPoint).value === field.getCell(iterPoint).value
            ) {
              field = field.coalitionCells(iterPoint, postIterPoint)

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
  

export default cellsColitions
