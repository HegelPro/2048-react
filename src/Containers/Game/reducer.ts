import { ActionType, createReducer } from 'typesafe-actions'

import { FieldDataRecord } from '../../models/data'

import * as fieldActions from './actions'

export type FieldActions = ActionType<typeof fieldActions>


export default createReducer<FieldDataRecord, FieldActions>(new FieldDataRecord())
  .handleAction(fieldActions.setCurrentFieldAction, (state, action) => state.set('current', action.payload))
  .handleAction(fieldActions.setPreviousFieldAction, (state, action) => state.set('previous', action.payload))
