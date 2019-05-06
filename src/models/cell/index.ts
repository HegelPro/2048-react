import { Record } from 'immutable'

import {
  ICell,
  ICellInitParams,
} from './types'

const defaultCell: ICell = {
  value: 0,
  id: 0,
  renderId: 0,
}

export class CellRecord extends Record<ICell>(defaultCell) {
  public static deserialize(object: any): CellRecord {
    return new CellRecord({
      ...object,
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
