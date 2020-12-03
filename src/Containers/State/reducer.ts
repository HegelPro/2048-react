import {createReducer} from 'typesafe-actions'
import {FieldStateRecord} from '../../models/state'
import {RootActions} from '../../store/types'
import {setFieldRecordsAction} from './actions'


export default createReducer<FieldStateRecord, RootActions>([])
  .handleAction(setFieldRecordsAction, (_, action) => (action.payload))
