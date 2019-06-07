import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord } from '../models/field'
import { VectorRecord } from '../models/vector'

export default function cellsColitions(
  field: FieldRecord,
  diraction: VectorRecord,
): FieldRecord {
  let iterPoint = selectIterationStartPoint(field, diraction)

  const Deg90 = Math.PI / 2
  const turned90DegDiraction = diraction.turn(Deg90)

  let postIterPoint: VectorRecord
  while (field.hasCell(iterPoint)) {
    postIterPoint = iterPoint

    if (field.hasCell(iterPoint.plus(diraction))) {
      iterPoint = iterPoint.plus(diraction)

      if (
        field.getCell(iterPoint).value > 0 &&
        field.getCell(postIterPoint).value === field.getCell(iterPoint).value
      ) {
        field = field.coalitionCells(iterPoint, postIterPoint)

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
