import { FieldRecord } from '../models/field/schema'
import { Vector } from '../models/vector/schema'
import cellsColitions from './cellsColitions'
import cellsMover from './cellsMover'
import curry from '../utils/curry'

const doNextGameStep = curry((diraction: Vector, field: FieldRecord): FieldRecord =>
  cellsMover(
    diraction,
    cellsColitions(
      diraction,
      cellsMover(
        diraction,
        field, 
      )
    ),
  )
)

export default doNextGameStep
