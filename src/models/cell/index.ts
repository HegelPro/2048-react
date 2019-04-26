import { Record } from 'immutable'

import { CellType, CellInitParams } from './types'

import { Vector } from '../vector'

export class CellRecord extends Record<CellType>({
  changedByVector: new Vector(),
  value: 0,
  id: 0,
}) {
  public static init(initParams: CellInitParams): CellRecord {
    return new CellRecord({
      value: initParams.value,
      id: Math.random(),
    })
  }
}
