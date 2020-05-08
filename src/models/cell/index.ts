import {
  ICell,
  ICellInitParams,
} from './types'

export class CellRecord {
  private readonly __value: ICell

  constructor(params: ICell) {
    this.__value = params
  }

  static init(initParams: ICellInitParams): CellRecord {
    return CellRecord.of({
      value: initParams.value,
      id: Math.random(),
      renderId: Math.random(),
    })
  }

  static of(params: ICell) {
    return new CellRecord(params)
  }

  static zero() {
    return CellRecord.of({
      value: 0,
      id: Math.random(),
      renderId: Math.random(),
    })
  }

  get value() {
    return this.__value.value
  }
  get renderId() {
    return this.__value.renderId
  }
  get id() {
    return this.__value.id
  }

  getValue(): number {
    return Math.pow(2, this.value)
  }

  set<K extends keyof ICell>(keyName: K, value: ICell[K]): CellRecord {
    const newCellValue = {...this.__value, [keyName]: value}
    return CellRecord.of(newCellValue)
  }
  update<K extends keyof ICell>(keyName: K, f: (value: ICell[K]) => ICell[K]): CellRecord {
    const newCellValue = {...this.__value, [keyName]: f(this.__value[keyName])}
    return CellRecord.of(newCellValue)
  }
}
