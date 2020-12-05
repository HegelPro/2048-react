import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'
import LocalStorageService from '../utils/localStorage'
import debounce from '../utils/debounce'
import rootReducer, { defaultRootState } from './reducers'
import { Nothing } from 'purify-ts'
import {version} from '../../package.json'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialState = LocalStorageService.get('version')
  .toMaybe()
  .map(postVerion => postVerion === version)
  .chain((isEqualsVersions) => isEqualsVersions
    ? LocalStorageService.get('state').toMaybe()
    : Nothing
  )
  .map(({field: {current, ...field}, ...state}) => ({...state, field: {...field, current, previous: current}}))
  .orDefault(defaultRootState)

LocalStorageService.set('version', version)


const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
)

const debouncedSaveLocalStorage = debounce(
  () => LocalStorageService.set('state', store.getState()),
  100,
)

store.subscribe(debouncedSaveLocalStorage)
