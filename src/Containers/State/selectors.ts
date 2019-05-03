import { RootState } from '../../store/types'

export function selectFieldRecords(state: RootState) {
  return state.field.records
}
