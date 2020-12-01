import {RootState} from '../store/types'
import debounce from '../utils/debounce'
import { Either, Right } from 'purify-ts'

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }
    const parsedSerializedState = JSON.parse(serializedState)

    return parsedSerializedState
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {
    // ignore write errors
  }
}

export const debouncedSaveState = debounce(saveState, 1000)

// TODO реализовать позже
class LocalStorageService<State extends object> {
  get<Key extends keyof State>(key: Key): Either<never, State[Key]> {
    const state = {} as State
    return Right(state[key])
  }

  set<Key extends keyof State>(key: Key, state: State): Either<never, State[Key]> {
    return Right(state[key])
  }
}

export default LocalStorageService
