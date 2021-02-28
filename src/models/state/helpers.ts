import {FieldRecord} from '../field/schema'
import FieldRecordHelper from '../field/helpers'
import { Vector } from '../vector/schema'
import VectorHelpers from '../vector/helpers'
import { RecordElementRecord } from '../recordElement/schema'
import {List, Maybe} from 'purify-ts'
import curry from '../../utils/curry'
import FieldHelpers from '../field/helpers'

const getRecordByPosition = curry((records: RecordElementRecord[], position: Vector): Maybe<RecordElementRecord> => {
  const normolizedPosition: Vector = VectorHelpers.normolize(position)

  return List.find(
    (record) => VectorHelpers.equals(normolizedPosition, record.position),
    records,
  )
})

const updateRecordValue = curry((records: RecordElementRecord[], field: FieldRecord): RecordElementRecord[] => {
  const normolizedPosition: Vector = VectorHelpers.normolize({
    x: FieldHelpers.getColumns(field),
    y: FieldHelpers.getRows(field),
  })

  const prevRecordValue = getRecordByPosition(records, normolizedPosition)

  const cellsValueSum = FieldRecordHelper.getCellsSumValue(field)

  return prevRecordValue
    .map(({value}) => {
      return cellsValueSum > value
        ? records.reduce<RecordElementRecord[]>((res, cur) =>
            VectorHelpers.equals(cur.position, normolizedPosition)
              ? [...res, {...cur, value: cellsValueSum}]
              : [...res, cur]
          , [])
        : records
    })
    .orDefault([
      ...records,
      {
        value: cellsValueSum,
        position: normolizedPosition,
      },
    ])
})

const StateHelpers = {
  updateRecordValue,
  getRecordByPosition,
}

export default StateHelpers
