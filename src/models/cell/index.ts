import { Record } from 'immutable'

import { VectorRecord } from '../vector'
import { isObject } from '../../utils/types'

import { ICell, ICellInitParams } from './types'

const defaultCell: ICell = {
  changedByVector: new VectorRecord(),
  value: 0,
  id: 0,
  renderId: 0,
}

export class CellRecord extends Record<ICell>(defaultCell) {
  public static deserialize(object: any): CellRecord {
    if (
      !isObject(object)
      && object.changedByVector === undefined
    ) {
      throw new TypeError('Wrong object type for a deserialization')
    }
    return new CellRecord({
      ...object,
      changedByVector: VectorRecord.deserialize(object.changedByVector),
    })
  }

  public static init(initParams: ICellInitParams): CellRecord {
    return new CellRecord({
      value: initParams.value,
      id: Math.random(),
      renderId: Math.random(),
    })
  }

  public getValue(): number {
    return Math.pow(2, this.value)
  }
}
