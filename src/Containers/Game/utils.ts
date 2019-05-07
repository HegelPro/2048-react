import { List, Map } from 'immutable'

import { RootState } from '../../store/types'
import { FieldRecord } from '../../models/field'
import { CellRecord } from '../../models/cell'
import { FieldSettingsRecord } from '../../models/settings'
import { FieldDataRecord } from '../../models/data'
import { FieldStateRecord } from '../../models/state'
import { RecordElementRecord } from '../../models/recordElement'
import { VectorRecord } from '../../models/vector'

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }
    const parsedSerializedState = JSON.parse(serializedState)

    const deserializedState = {
      field: new FieldDataRecord({
        current: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord(cell),
          )),
        }),
        previous: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord(cell),
          )),
        }),
      }),
      settings: new FieldSettingsRecord(parsedSerializedState.settings),
      state: new FieldStateRecord({
        records: List(parsedSerializedState.state.records.map((record: any) => new RecordElementRecord({
          ...record,
          position: new VectorRecord(record.position),
        }))),
      }),
    }
    return deserializedState
  } catch (err) {
    return undefined
  }
}
