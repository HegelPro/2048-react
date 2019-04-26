import { StateType, ActionType } from 'typesafe-actions'
import { Epic as ROEpic } from 'redux-observable'

export type Store = StateType<typeof import('./index').store>
export type RootActions = ActionType<typeof import('./actions').default>
export type RootState = StateType<typeof import('./reducers').default>
export type Epic = ROEpic<RootActions, RootActions, RootState>
