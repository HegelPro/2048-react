import { createAction } from 'typesafe-actions'

import { FieldInitParams } from '../../models/field/types'
import { Vector } from '../../models/vector'
import { FieldRecord } from '../../models/field'


export const initField = createAction('field/INIT_FIELD', resolve =>
  (fieldInitParams: FieldInitParams) => resolve(fieldInitParams),
)

export const setField = createAction('field/SET_FIELD', resolve =>
  (field: FieldRecord) => resolve(field),
)

export const moveCells = createAction('field/MOVE_CELLS_REQUEST', resolve =>
  (diraction: Vector) => resolve(diraction),
)
