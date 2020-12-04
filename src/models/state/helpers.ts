import {FieldRecord} from '../field/schema'
import FieldRecordHelper from '../field/helpers'
import { Vector } from '../vector/schema'
import VectorHelpers from '../vector/helpers'
import { RecordElementRecord } from '../recordElement/schema'
import {List, Maybe} from 'purify-ts'
import curry from '../../utils/curry'

const getRecordByPosition = curry((records: RecordElementRecord[], position: Vector): Maybe<RecordElementRecord> =>
  List.find(
    (record) => VectorHelpers.equals(position, record.position),
    records,
  )
)

const updateRecordValue = curry((records: RecordElementRecord[], field: FieldRecord): RecordElementRecord[] => {
  const recordPosition: Vector = VectorHelpers.normolize({
    x: field.columns,
    y: field.rows,
  })

  const prevRecordValue = getRecordByPosition(records, recordPosition)

  const cellsValueSum = FieldRecordHelper.getCellsSumValue(field)

  return prevRecordValue
    .map(({value}) => {
      return cellsValueSum > value
        ? records.reduce<RecordElementRecord[]>((res, cur) =>
            VectorHelpers.equals(cur.position, recordPosition)
              ? [...res, {...cur, value: cellsValueSum}]
              : [...res, cur]
          , [])
        : records
    })
    .orDefault([
      ...records,
      {
        value: cellsValueSum,
        position: recordPosition,
      },
    ])
})

export default {
  updateRecordValue,
  getRecordByPosition,
}
