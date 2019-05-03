import { List, Map } from 'immutable'

import { RootState } from '../../store/types'
import { FieldRecord } from '../../models/field'
import { CellRecord } from '../../models/cell'
import { VectorRecord } from '../../models/vector'
import { FieldSettingsRecord } from '../../models/fieldSettings'
import { FieldStateRecord } from '../../models/fieldState'

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }
    const parsedSerializedState = JSON.parse(serializedState)
    return {
      field: new FieldStateRecord({
        current: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord({
              ...cell,
              changedByVector: new VectorRecord({ ...cell.changedByVector }),
            })),
          ),
        }),
        previous: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord({
              ...cell,
              changedByVector: new VectorRecord({ ...cell.changedByVector }),
            })),
          ),
        }),
        records: Map(parsedSerializedState.records),
      }),
      settings: new FieldSettingsRecord({
        ...parsedSerializedState.settings,
      }),
    }
  } catch (err) {
    return undefined
  }
}
