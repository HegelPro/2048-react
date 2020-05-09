import { createAction } from 'typesafe-actions'

import { IFieldSettings } from '../../models/settings/types'

export const setFieldRowsAction = createAction('field/SET_ROWS')<number>()

export const setFieldColumnsAction = createAction('field/SET_COLUMNS')<number>()

export const setFieldSettingsAction = createAction('field/SET_FIELD_SETTINGS')<IFieldSettings>()
