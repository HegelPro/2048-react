import { Codec, number } from 'purify-ts'
import {createReducer} from 'typesafe-actions'
import {FieldSettingsRecord} from '../../models/settings'
import {RootActions} from '../../store/types'
import { setFieldSettingsAction } from './actions'

export const SettingsShcema = Codec.interface({
  rows: number,
  columns: number,
})

export default createReducer<FieldSettingsRecord, RootActions>({
  rows: 4,
  columns: 4
})
  .handleAction(setFieldSettingsAction, (_, action) => action.payload)
