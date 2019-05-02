import { Record } from 'immutable'

import { ICellType, ICellInitParams } from './types'

import { VectorRecord } from '../vector'

export class CellRecord extends Record<ICellType>({
  changedByVector: new VectorRecord(),
  value: 0,
  id: 0,
  renderId: 0,
}) {
  public static init(initParams: ICellInitParams): CellRecord {
    return new CellRecord({
      value: initParams.value,
      id: Math.random(),
      renderId: Math.random(),
    })
  }
}
