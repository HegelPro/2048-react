import { Record } from 'immutable'

import { VectorRecord } from '../vector'
import { isObject } from '../../utils/types'

import { IRecordElement } from './types'

const defaultRecordElementValue: IRecordElement = {
  position: new VectorRecord(),
  value: 0,
}

export class RecordElementRecord extends Record<IRecordElement>(defaultRecordElementValue) {
  public static deserialize(object: any): RecordElementRecord {
    if (
      !isObject(object)
      && object.position === undefined
    ) {
      throw new TypeError('Wrong object type for a deserialization')
    }
    return new RecordElementRecord({
      ...object,
      position: VectorRecord.deserialize(object.position),
    })
  }
}
