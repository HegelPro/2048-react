import { createReducer } from 'typesafe-actions'
import { FieldDataRecord } from '../../models/data/schema'
import FieldRecordHelper from '../../models/field/helpers'
import { RootActions } from '../../store/types'
import { setCurrentFieldAction, setPreviousFieldAction } from './actions'

export default createReducer<FieldDataRecord, RootActions>({
  current: FieldRecordHelper.zero,
  previous: FieldRecordHelper.zero,
})
  .handleAction(setCurrentFieldAction, (state, action) => ({...state, current: action.payload}))
  .handleAction(setPreviousFieldAction, (state, action) => ({...state, previous: action.payload}))
