import { Record } from 'immutable'
import { IFieldSettings } from './types'

export class FieldSettingsRecord extends Record<IFieldSettings>({
  rows: 3,
  columns: 3,
}) {}
