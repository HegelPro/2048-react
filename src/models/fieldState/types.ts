import { Map } from 'immutable'
import { VectorRecord } from '../vector'

export interface IFieldState {
  records: Map<VectorRecord, number>
}
