import CellRecordHelper from '../models/cell/helpers'
import FieldHelpers from '../models/field/helpers'
import { FieldRecord } from '../models/field/schema'
import { Just } from 'purify-ts'
import { Vector } from '../models/vector/schema'
import { randomArrayElem } from '../utils/array'

export default function selectRandomAvaibleCellPoint(field: FieldRecord): FieldRecord {
  const avaiblePositions = FieldHelpers.reduce<Vector[]>(
    [],
    (acc, cell, position) => cell === undefined ? [...acc, position] : acc,
    field,
  )
  const selectedPosition = randomArrayElem(avaiblePositions)

  return FieldHelpers.setCellByPosition(
    field,
    selectedPosition,
    Just(CellRecordHelper.init(Math.random() > 0.8 ? 2 : 1)),
  )
}
