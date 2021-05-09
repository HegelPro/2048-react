import { CellRecord } from './schema'

const CellRecordHelper = {
  getViewValue: (cell: CellRecord) => Math.pow(2, cell.value),
  init: (value: number): CellRecord => ({
    value,
    id: Math.random(),
    renderId: Math.random(),
  }),
}

export default CellRecordHelper