import { RootState } from '../../store/types'

export function selectSettings(state: RootState) {
  return state.settings
}
