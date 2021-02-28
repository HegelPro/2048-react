import {FieldStateRecord} from '../../models/state/schema'
import {RootActions} from '../../store/types'
import StateHelpers from '../../models/state/helpers'
import {createReducer} from 'typesafe-actions'
import { defaultFieldState } from '../Game/reducer'
import {setFieldRecordsAction} from './actions'

export const defaultFieldStateState = StateHelpers.updateRecordValue([], defaultFieldState.current)

export default createReducer<FieldStateRecord, RootActions>(defaultFieldStateState)
  .handleAction(setFieldRecordsAction, (_, action) => (action.payload))
