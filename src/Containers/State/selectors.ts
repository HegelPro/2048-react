import { RootState } from '../../store/types'

export function selectFieldRecords(state: RootState) {
  return state.state.records
}
