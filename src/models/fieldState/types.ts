import { Map } from 'immutable'
import { Vector } from '../vector'

export interface IFieldState {
  records: Map<Vector, number>
}
