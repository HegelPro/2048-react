import { FieldRecord } from '../field'

export interface FieldDataRecord {
  readonly current: FieldRecord
  readonly previous: FieldRecord
}
