import {ActionType, StateType} from 'typesafe-actions'
import {ThunkAction} from 'redux-thunk'

export type Store = StateType<typeof import('./store').store>

export type RootActions = ActionType<
  typeof import('../Containers/Game/actions')
  & typeof import('../Containers/Settings/actions')
  & typeof import('../Containers/State/actions')
>

export type RootState = StateType<typeof import('./reducers').default>

export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  RootActions
>
