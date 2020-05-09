import { Record, List } from 'immutable'

import { FieldRecord } from '../field'
import { Vector, VectorHelpers } from '../vector'

import { IFieldState } from './types'
import { RecordElementRecord } from '../recordElement'

const defaultFieldState: IFieldState = {
  records: List(),
}

export class FieldStateRecord extends Record<IFieldState>(defaultFieldState) {
  public updateRecordValue(field: FieldRecord): this {
    return this
      .update('records', (records) => {
        const recordPosition: Vector = VectorHelpers.normolize({
          x: field.columns,
          y: field.rows,
        })
        const prevRecordValue = this.getRecordByPosition(recordPosition)
        const cellsValueSum = field.getCellsSumValue()
        if (prevRecordValue) {
          if (cellsValueSum > prevRecordValue.value) {
            return records.update(
              records.findIndex((record) => record.position === recordPosition),
              (record) => record.set('value', cellsValueSum),
            )
          }
          return records
        }
        return records.push(
          RecordElementRecord.of({
            value: 0,
            position: recordPosition,
          }),
        )
      })
  }

  public getRecordByPosition(position: Vector): RecordElementRecord | undefined {
    return this.records.find((record) => VectorHelpers.equals(position)(record.position))
  }
}
