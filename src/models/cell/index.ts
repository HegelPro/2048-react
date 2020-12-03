import { Codec, GetType, number } from 'purify-ts'

export type CellRecord = GetType<typeof CellRecordSchema>

export const CellRecordSchema = Codec.interface({
  value: number,
  id: number,
  renderId: number,
})

export const CellRecordHelper = {
  getViewValue: (cell: CellRecord) => Math.pow(2, cell.value),
  init: ({value}: {value: number}): CellRecord => ({
    value,
    id: Math.random(),
    renderId: Math.random(),
  }),
}
