import { createStandardAction } from 'typesafe-actions'

import { FieldInitParams } from '../../models/field/types'
import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'


export const initField = createStandardAction('field/INIT_FIELD')<FieldInitParams>()

export const setField = createStandardAction('field/SET_FIELD')<FieldRecord>()

export const addFieldInHistory = createStandardAction('field/ADD_HISTORY')<FieldRecord>()

export const remoteLostFieldInHistory = createStandardAction('field/REMOTE_LOST_FIELD_IN_HISTORY')()

export const resetFieldHistory = createStandardAction('field/RESET_HISTORY')()

export const moveCells = createStandardAction('field/MOVE_CELLS_REQUEST')<Vector>()

export const returnPrevField = createStandardAction('field/RETURN_PREV_FIELD')()