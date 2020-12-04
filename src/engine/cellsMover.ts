import { selectIterationStartPoint } from './iteratetion'
import { FieldRecord } from '../models/field/schema'
import FieldRecordHelper from '../models/field/helpers'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'

const cellsMover = (diraction: Vector) => {
  const moveRight = VectorHelpers.plus(diraction)
  const moveLeft = VectorHelpers.minus(diraction)
  const Deg90 = Math.PI / 2
  const topDiraction = VectorHelpers.turn(Deg90, 1, diraction)
  const moveTop = VectorHelpers.plus(topDiraction)

  return (field: FieldRecord): FieldRecord =>
  {
    let iterPoint = selectIterationStartPoint(diraction)(field)


    let postIterPoint: Vector
    while (FieldRecordHelper.hasCell(field, iterPoint)) {
      postIterPoint = iterPoint

      if (FieldRecordHelper.hasCell(field, moveRight(iterPoint))) {
        iterPoint = moveRight(iterPoint)

        while (
          // TODO remove default -1
          FieldRecordHelper.getCell(field, iterPoint).map(({value}) => value).orDefault(-1) > 0 &&
          FieldRecordHelper.getCell(field, postIterPoint).map(({value}) => value).orDefault(-1) === 0
        ) {
          field = FieldRecordHelper.swapeCells(field, postIterPoint, iterPoint)

          while (FieldRecordHelper.hasCell(field, moveLeft(iterPoint))) {
            iterPoint = moveLeft(iterPoint)
          }
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
  

export default cellsMover
