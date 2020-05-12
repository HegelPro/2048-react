export interface CellRecord {
  readonly value: number
  readonly id: number
  readonly renderId: number
}

export const CellRecordHelper = {
  getViewValue: (cell: CellRecord) => Math.pow(2, cell.value),
  init: ({value}: {value: number}): CellRecord => ({
    value,
    id: Math.random(),
    renderId: Math.random(),
  }),
}
