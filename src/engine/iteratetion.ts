import { VectorHelpers, Vector } from '../models/vector'
import { FieldRecord } from '../models/field'

export const selectIterationStartPoint = (diraction: Vector) =>
  {
    const Deg90 = Math.PI / 2
    const topDiraction = VectorHelpers.turn(Deg90, 1)(diraction)
    return (field: FieldRecord): Vector =>
      {
        const x: number = topDiraction.x > 0 || diraction.x > 0
          ? 0
          : field.columns - 1
        const y: number = topDiraction.y > 0 || diraction.y > 0
          ? 0
          : field.rows - 1
  
        return { x, y }
      }
  }
  
