import { selectIterationStartPoint } from './iteratetion'

import { FieldRecord } from '../models/field'
import { Vector, VectorHelpers } from '../models/vector'

export default function cellsColitions(
  field: FieldRecord,
  diraction: Vector,
): FieldRecord {
  let iterPoint = selectIterationStartPoint(field, diraction)

  const Deg90 = Math.PI / 2
  const turned90DegDiraction = VectorHelpers.turn(Deg90, 1)(diraction)

  let postIterPoint: Vector
  while (field.hasCell(iterPoint)) {
    postIterPoint = iterPoint

    if (field.hasCell(VectorHelpers.plus(diraction)(iterPoint))) {
      iterPoint = VectorHelpers.plus(diraction)(iterPoint)

      if (
        field.getCell(iterPoint).value > 0 &&
        field.getCell(postIterPoint).value === field.getCell(iterPoint).value
      ) {
        field = field.coalitionCells(iterPoint, postIterPoint)

      }
    } else {
      iterPoint = VectorHelpers.plus(turned90DegDiraction)(iterPoint)

      while (field.hasCell(VectorHelpers.minus(diraction)(iterPoint))) {
        iterPoint = VectorHelpers.minus(diraction)(iterPoint)
      }
    }
  }

  return field
}
