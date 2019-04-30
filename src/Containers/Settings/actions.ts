import { createStandardAction } from 'typesafe-actions'
import { IFieldSettings } from '../../models/fieldSettings/types'

export const setFieldRowsAction = createStandardAction('field/SET_ROWS')<number>()

export const setFieldColumnsAction = createStandardAction('field/SET_COLUMNS')<number>()

export const setFieldSettingsAction = createStandardAction('field/SET_FIELD_SETTINGS')<IFieldSettings>()
