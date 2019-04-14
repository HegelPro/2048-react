import { createAction, createStandardAction } from 'typesafe-actions'

import { FieldInitParams } from '../../models/field/types'
import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'


export const initField = createStandardAction('field/INIT_FIELD')<FieldInitParams>()

export const setField = createStandardAction('field/SET_FIELD')<FieldRecord>()

export const moveCells = createStandardAction('field/MOVE_CELLS_REQUEST')<Vector>()
