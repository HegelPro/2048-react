import { Record } from 'immutable'

import {
  ICell,
  ICellInitParams,
} from './types'

const defaultCell: ICell = {
  value: 0,
  id: 0,
}

export class CellRecord extends Record<ICell>(defaultCell) {
  public static init(initParams: ICellInitParams): CellRecord {
    return new CellRecord({
      value: initParams.value,
      id: Math.random(),
    })
  }

  public getValue(): number {
    return Math.pow(2, this.value)
  }
}
