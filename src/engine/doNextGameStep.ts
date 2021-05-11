import { FieldRecord } from '../models/field/schema'
import { Vector } from '../models/vector/schema'
import cellsColitions from './cellsColitions'
import cellsMover from './cellsMover'
import curry from '../utils/curry'
import { Diraction } from '../models/vector/constants'

const doNextGameStep = curry((
  field: FieldRecord,
  firstDir: Diraction,
  secondDir: Diraction,
): FieldRecord =>
  cellsMover(
    cellsColitions(
      cellsMover(
        field, 
        firstDir,
        secondDir,
      ),
      firstDir,
      secondDir,
    ),
    firstDir,
    secondDir,
  )
)

export default doNextGameStep
