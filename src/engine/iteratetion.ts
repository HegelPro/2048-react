import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import { Vector } from '../models/vector/schema'
import VectorHelpers from '../models/vector/helpers'
import curry from '../utils/curry'
import gradToRad from '../utils/gradToRad'

export const selectIterationStartPoint = curry((diraction: Vector, field: FieldRecord): Vector => {
  const topDiraction = VectorHelpers.turn(gradToRad(90), 1, diraction)
  const x: number = topDiraction.x > 0 || diraction.x > 0
    ? 0
    : FieldHelpers.getColumns(field) - 1
  const y: number = topDiraction.y > 0 || diraction.y > 0
    ? 0
    : FieldHelpers.getRows(field) - 1

  return { x, y }
})
