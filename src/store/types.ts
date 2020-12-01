import {StateType, ActionType} from 'typesafe-actions'
import {Epic as ROEpic} from 'redux-observable'
import {ThunkAction} from 'redux-thunk'

export type Store = StateType<typeof import('./index').store>

export type RootActions = ActionType<
  typeof import('../Containers/Game/actions')
  & typeof import('../Containers/Settings/actions')
  & typeof import('../Containers/State/actions')
>

export type RootState = StateType<typeof import('./reducers').default>

export type Epic = ROEpic<RootActions, RootActions, RootState>
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootActions
>
