import { Record, Map } from 'immutable'

import { FieldRecord } from '../../models/field'
import { VectorRecord } from '../vector'

import { IFieldState } from './types'

const defaultFieldState: IFieldState = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
  records: Map(),
}

export class FieldStateRecord extends Record<IFieldState>(defaultFieldState) {
  public updateRecordValue(field: FieldRecord): this {
    return this
      .update('records', (records) => {
        const recordPositions = new VectorRecord({
          x: field.columns,
          y: field.rows,
        })
        const prevRecordValue = records.get(recordPositions)
        const cellsValueSum = field.getCellsSumValue()
        if (prevRecordValue) {
          return records.set(recordPositions, cellsValueSum > prevRecordValue
            ? cellsValueSum
            : prevRecordValue)
        }
        return records.set(recordPositions, cellsValueSum)
      })
  }
}
