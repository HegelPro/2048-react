import { Map } from 'immutable'

import { VectorRecord } from '../vector'
import { FieldRecord } from '../field'

export interface IFieldState {
  current: FieldRecord
  previous: FieldRecord
  records: Map<VectorRecord, number>
}
