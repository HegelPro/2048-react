import { Record } from 'immutable'
import { IFieldSettings } from './types'

const defaultFieldSettings: IFieldSettings = {
  rows: 4,
  columns: 4,
}

export class FieldSettingsRecord extends Record<IFieldSettings>(defaultFieldSettings) {}
