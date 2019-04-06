import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'

export function selectIterationStartPoint(
  field: FieldRecord,
  diraction: Vector,
): Vector {
  const Deg90 = Math.PI / 2
  const turned90DegDiraction = diraction.turn(Deg90)
  const x: number = turned90DegDiraction.x > 0 || diraction.x > 0
    ? 0
    : field.columns - 1
  const y: number = turned90DegDiraction.y > 0 || diraction.y > 0
    ? 0
    : field.rows - 1

  return new Vector({ x, y })
}
