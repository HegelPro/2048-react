import { CellRecord } from './schema'

const CellHelpers = {
  getViewValue: (cell: CellRecord) => Math.pow(2, cell.value),
  init: ({value}: {value: number}): CellRecord => ({
    value,
    id: Math.random(),
    renderId: Math.random(),
  }),
}

export default CellHelpers