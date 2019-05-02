import { Record, Map } from 'immutable'

import { FieldRecord } from '../../models/field'
import { FieldSettingsRecord } from '../fieldSettings'

import { IFieldState } from './types'

const defaultFieldState: IFieldState = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
  records: Map(),
  settings: new FieldSettingsRecord(),
}

export class FieldStateRecord extends Record<IFieldState>(defaultFieldState) {}
