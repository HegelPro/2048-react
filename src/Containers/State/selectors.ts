import { RootState } from '../../store/types'

export function selectFieldState(state: RootState) {
  return state.state
}
