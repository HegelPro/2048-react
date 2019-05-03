import { RootState } from '../../store/types'

export function selectCurrentField(state: RootState) {
  return state.field.current
}

export function selectPreviousField(state: RootState) {
  return state.field.previous
}

export function selectFieldRecords(state: RootState) {
  return state.field.records
}
