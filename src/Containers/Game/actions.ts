import { createAction } from 'typesafe-actions'

import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'

export const initFieldAction = createAction('field/INIT_FIELD')()

export const initFieldFromLocalStorageAction = createAction(
  'field/INIT_FIELD_FROM_LOCAL_STORAGE',
)()

export const setCurrentFieldAction = createAction('field/SET_CURRENT_FIELD')<FieldRecord>()

export const setPreviousFieldAction = createAction('field/SET_PREVIOUS_FIELD')<FieldRecord>()

export const moveCellsAction = createAction('field/MOVE_CELLS')<Vector>()
