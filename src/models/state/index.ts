import { FieldRecord, FieldRecordHelper } from '../field'
import { Vector, VectorHelpers } from '../vector'
import { RecordElementRecord } from '../recordElement'
import {List, Maybe} from 'purify-ts'

export type FieldStateRecord = RecordElementRecord[]

export const getRecordByPosition = (records: RecordElementRecord[]) => (position: Vector): Maybe<RecordElementRecord> => {
  return List.find((record) => VectorHelpers.equals(position)(record.position), records);
}

const updateRecordValue = (records: RecordElementRecord[], field: FieldRecord): RecordElementRecord[] => {
  const recordPosition: Vector = VectorHelpers.normolize({
    x: field.columns,
    y: field.rows,
  })
  const prevRecordValue = getRecordByPosition(records)(recordPosition).extract()
  const cellsValueSum = FieldRecordHelper.getCellsSumValue(field)

  if (prevRecordValue) {
    if (cellsValueSum > prevRecordValue.value) {
      const newRecords = records.reduce<RecordElementRecord[]>((res, cur) => {
        if (VectorHelpers.equals(cur.position)(recordPosition)) {
          return [...res, {...cur, value: cellsValueSum}]
        }
        return [...res, cur]
      }, [])
      
      return newRecords
    }

    return records
  }

  return [...records, {
    value: cellsValueSum,
    position: recordPosition,
  }];
}

export const FieldStateRecordHelper = {
  updateRecordValue,
  getRecordByPosition,
}
