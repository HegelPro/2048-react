import {FieldRecord, FieldRecordHelper} from '../field'
import { Vector, VectorHelpers } from '../vector'
import { RecordElementRecord, RecordElementSchema } from '../recordElement'
import {array, GetType, List, Maybe} from 'purify-ts'

export type FieldStateRecord = GetType<typeof FieldStateSchema>

export const FieldStateSchema = array(RecordElementSchema)

const getRecordByPosition = (records: RecordElementRecord[]) =>
  (position: Vector): Maybe<RecordElementRecord> =>
    List.find(
      (record) => VectorHelpers.equals(position)(record.position),
      records,
    )

const updateRecordValue = (records: RecordElementRecord[], field: FieldRecord): RecordElementRecord[] => {
  const recordPosition: Vector = VectorHelpers.normolize({
    x: field.columns,
    y: field.rows,
  })

  const prevRecordValue = getRecordByPosition(records)(recordPosition)

  const cellsValueSum = FieldRecordHelper.getCellsSumValue(field)

  return prevRecordValue
    .map(({value}) => {
      return cellsValueSum > value
        ? records.reduce<RecordElementRecord[]>((res, cur) =>
            VectorHelpers.equals(cur.position)(recordPosition)
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
}

export const FieldStateRecordHelper = {
  updateRecordValue,
  getRecordByPosition,
}
