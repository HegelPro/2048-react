import cellsMover from './cellsMover'
import cellsColitions from './cellsColitions'

import { FieldRecord } from '../models/field'
import { VectorRecord } from '../models/vector'

export default function doNextGameStep(field: FieldRecord, diraction: VectorRecord) {
  field = cellsMover(field, diraction)
  field = cellsColitions(field, diraction)
  field = cellsMover(field, diraction)
  return field
}
