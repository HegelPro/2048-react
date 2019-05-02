import { Record, Map } from 'immutable'
import { IFieldState } from './types'

export class FieldStateRecord extends Record<IFieldState>({
  records: Map(),
}) {}
