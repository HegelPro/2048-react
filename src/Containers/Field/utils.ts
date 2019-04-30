import { RootState } from '../../store/types'
import { FieldReduserStateRecord } from './reducer'
import { FieldSettingStateRecord } from '../Settings/reducer'
import { List } from 'immutable'
import { FieldRecord } from '../../models/field'
import { CellRecord } from '../../models/cell'
import { Vector } from '../../models/vector'

export const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('state')

    if (serializedState === null) {
      return undefined
    }
    const parsedSerializedState = JSON.parse(serializedState)
    return {
      field: new FieldReduserStateRecord({
        current: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord({
              ...cell,
              changedByVector: new Vector({ ...cell.changedByVector }),
            })),
          ),
        }),
        previous: new FieldRecord({
          ...parsedSerializedState.field.current,
          cells: List(parsedSerializedState.field.current.cells.map(
            (cell: any) => new CellRecord({
              ...cell,
              changedByVector: new Vector({ ...cell.changedByVector }),
            })),
          ),
        }),
      }),
      settings: new FieldSettingStateRecord({
        ...parsedSerializedState.settings,
      }),
    }
  } catch (err) {
    return undefined
  }
}
