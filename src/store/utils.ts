import { RootState } from './types'
import { debounce } from '../utils'

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {
    // ignore write errors
  }
}

export const debouncedSaveState = debounce(saveState, 1000)
