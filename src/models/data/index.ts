import { Record, Map } from 'immutable'

import { FieldRecord } from '../field'

import { IFieldData } from './types'

const defaultFieldState: IFieldData = {
  current: new FieldRecord(),
  previous: new FieldRecord(),
}

export class FieldDataRecord extends Record<IFieldData>(defaultFieldState) {}
