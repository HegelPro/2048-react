import { IFieldSettings } from './types'


export class FieldSettingsRecord {
  private readonly __value: IFieldSettings

  constructor(value: IFieldSettings) {
    this.__value = value
  }

  set<K extends keyof IFieldSettings>(keyName: K, value: IFieldSettings[K]): FieldSettingsRecord {
    const newValue = {...this.__value, [keyName]: value}
    return FieldSettingsRecord.of(newValue)
  }

  static of(value: IFieldSettings) {
    return new FieldSettingsRecord(value)
  }

  get rows() {
    return this.__value.rows
  }
  get columns() {
    return this.__value.columns
  }
}
