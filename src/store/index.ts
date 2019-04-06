import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from './reducers'
import rootEpic from './epics'
import { RootActions, RootState } from './types'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const epicMiddleware = createEpicMiddleware<RootActions, RootActions, RootState>()

const initialState = {}

const middleware = [epicMiddleware]

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
)
epicMiddleware.run(rootEpic)

