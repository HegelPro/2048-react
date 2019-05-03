import { List, Map } from 'immutable'

import { RootState } from '../../store/types'
import { FieldRecord } from '../../models/field'
import { CellRecord } from '../../models/cell'
import { FieldSettingsRecord } from '../../models/settings'
import { FieldDataRecord } from '../../models/data'
import { FieldStateRecord } from '../../models/state'

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }
    const parsedSerializedState = JSON.parse(serializedState)
    return {
      field: new FieldDataRecord({
        current: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => CellRecord.deserialize(cell),
          )),
        }),
        previous: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => CellRecord.deserialize(cell),
          )),
        }),
        records: Map(parsedSerializedState.records),
      }),
      settings: new FieldSettingsRecord({
        ...parsedSerializedState.settings,
      }),
      state: new FieldStateRecord(),
    }
  } catch (err) {
    return undefined
  }
}
