import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord, FieldRecordHelper } from '../models/field'
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
        while (FieldRecordHelper.hasCell(field, iterPoint)) {
          postIterPoint = iterPoint

          if (FieldRecordHelper.hasCell(field, moveRight(iterPoint))) {
            iterPoint = moveRight(iterPoint)

            const cellIter = FieldRecordHelper.getCell(field, iterPoint).extract()
            const cellPostIter = FieldRecordHelper.getCell(field, postIterPoint).extract()

            if (
              cellIter &&
              cellPostIter &&
              cellIter.value > 0 &&
              cellIter.value === cellPostIter.value
            ) {
              field = FieldRecordHelper.coalitionCells(field, iterPoint, postIterPoint)

            }
          } else {
            iterPoint = moveTop(iterPoint)

            while (FieldRecordHelper.hasCell(field, moveLeft(iterPoint))) {
              iterPoint = moveLeft(iterPoint)
            }
          }
      }

      return field
    }
  }
  

export default cellsColitions
