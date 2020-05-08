import { Vector, VectorHelpers } from '../vector'

export interface IRecordElement {
  readonly position: Vector
  readonly value: number
}

export class RecordElementRecord {
  private readonly __value: IRecordElement

  constructor(value: IRecordElement) {
    this.__value = value
  }
  
  static of(value: IRecordElement): RecordElementRecord {
    return new RecordElementRecord(value)
  }

  get value() {
    return this.__value.value
  }

  get position() {
    return this.__value.position
  }

  set<K extends keyof IRecordElement>(keyName: K, value: IRecordElement[K]): RecordElementRecord {
    const newCellValue = {...this.__value, [keyName]: value}
    return RecordElementRecord.of(newCellValue)
  }

  static zero(): RecordElementRecord {
    return RecordElementRecord.of({
      position: VectorHelpers.zero,
      value: 0
    })
  }
}
