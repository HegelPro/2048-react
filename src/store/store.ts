import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux'
import thunk from 'redux-thunk'
import LocalStorageService from '../utils/localStorage'
import debounce from '../utils/debounce'
import rootReducer, { rootStateShcema } from './reducers'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initialStateFromLocalStorage = LocalStorageService.get('state', rootStateShcema.decode)
  .toMaybe()
  .extract()

const initialState = initialStateFromLocalStorage || {}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
)

const debouncedSaveLocalStorage = debounce(
  () => LocalStorageService.set('state', store.getState(), rootStateShcema.encode),
  100,
)

store.subscribe(debouncedSaveLocalStorage)
