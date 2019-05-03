import { Record } from 'immutable'
import { IFieldSettings } from './types'

const defaultFieldSettings: IFieldSettings = {
  rows: 3,
  columns: 3,
}

export class FieldSettingsRecord extends Record<IFieldSettings>(defaultFieldSettings) {}
