import { createStandardAction } from 'typesafe-actions'

export const setFieldRowsAction = createStandardAction('field/SET_ROWS')<number>()

export const setFieldColumnsAction = createStandardAction('field/SET_COLUMNS')<number>()
