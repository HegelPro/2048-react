import { List } from 'immutable'

import { RootState } from './types'

import { CellRecord } from '../models/cell'
import { FieldRecord } from '../models/field'
// import { VectorRecord } from '../models/vector'
import { FieldDataRecord } from '../models/data'
import { FieldStateRecord } from '../models/state'
import { FieldSettingsRecord } from '../models/settings'
import { RecordElementRecord } from '../models/recordElement'

import { debounce } from '../utils'

// export const loadState = (): RootState | undefined => {
//   try {
//     const serializedState = localStorage.getItem('state')

//     if (serializedState === null) {
//       return undefined
//     }
//     const parsedSerializedState = JSON.parse(serializedState)

//     const deserializedState = {
//       field: new FieldDataRecord({
//         current: new FieldRecord({
//           ...parsedSerializedState.field.current,
//           cells: List(parsedSerializedState.field.current.cells.map(
//             (cell: any) => new CellRecord(cell),
//           )),
//         }),
//         previous: new FieldRecord({
//           ...parsedSerializedState.field.current,
//           cells: List(parsedSerializedState.field.current.cells.map(
//             (cell: any) => new CellRecord(cell),
//           )),
//         }),
//       }),
//       settings: new FieldSettingsRecord(parsedSerializedState.settings),
//       state: new FieldStateRecord({
//         records: List(parsedSerializedState.state.records.map((record: any) => new RecordElementRecord({
//           ...record,
//           position: VectorRecord.of(record.position),
//         }))),
//       }),
//     }
//     return deserializedState
//   } catch (err) {
//     return undefined
//   }
// }

// export const saveState = (state: RootState) => {
//   try {
//     const serializedState = JSON.stringify(state)
//     localStorage.setItem('state', serializedState)
//   } catch {
//     // ignore write errors
//   }
// }

// export const debouncedSaveState = debounce(saveState, 1000)
