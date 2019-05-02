import { Record, Map } from 'immutable'

import { FieldRecord } from '../../models/field'

import { IFieldState } from './types'

const defaultFieldState: IFieldState = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
  records: Map(),
}

export class FieldStateRecord extends Record<IFieldState>(defaultFieldState) {}
