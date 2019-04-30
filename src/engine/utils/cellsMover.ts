import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord } from '../../models/field'
import { Vector } from '../../models/vector'

export default function cellsMover(
  field: FieldRecord,
  diraction: Vector,
): FieldRecord {
  let iterPoint = selectIterationStartPoint(field, diraction)

  const Deg90 = Math.PI / 2
  const turned90DegDiraction = diraction.turn(Deg90)

  let postIterPoint: Vector
  while (field.hasCell(iterPoint)) {
    postIterPoint = iterPoint

    if (field.hasCell(iterPoint.plus(diraction))) {
      iterPoint = iterPoint.plus(diraction)

      while (
        field.getCell(iterPoint).value > 0
        && field.getCell(postIterPoint).value === 0
      ) {
        field = field.swapeCells(postIterPoint, iterPoint)

        while (field.hasCell(iterPoint.minus(diraction))) {
          iterPoint = iterPoint.minus(diraction)
        }
      }
    } else {
      iterPoint = iterPoint.plus(turned90DegDiraction)

      while (field.hasCell(iterPoint.minus(diraction))) {
        iterPoint = iterPoint.minus(diraction)
      }
    }
  }

  return field
}
