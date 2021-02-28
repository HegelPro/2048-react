import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import { FieldRecord } from '../models/field/schema'
import curry from '../utils/curry'
import FieldHelpers from '../models/field/helpers'

export const selectIterationStartPoint = curry((diraction: Vector, field: FieldRecord): Vector => {
  const Deg90 = Math.PI / 2
  const topDiraction = VectorHelpers.turn(Deg90, 1, diraction)
  const x: number = topDiraction.x > 0 || diraction.x > 0
    ? 0
    : FieldHelpers.getColumns(field) - 1
  const y: number = topDiraction.y > 0 || diraction.y > 0
    ? 0
    : FieldHelpers.getRows(field) - 1

  return { x, y }
})
