import { CellRecord } from './schema'

const setValue = (cell: CellRecord, value: number): CellRecord => ({...cell, value})
const equals = (cellOne: CellRecord, cellTwo: CellRecord): Boolean => cellOne.value === cellTwo.value

const getViewValue = (cell: CellRecord) => Math.pow(2, cell.value)

const init = (value: number): CellRecord => ({
  value,
  id: Math.random(),
  renderId: Math.random(),
})

// TODO if future will be a product of values and maybe needSwap cellOne and cellTwo for render
const concat = (cellOne: CellRecord, cellTwo: CellRecord): CellRecord => setValue(cellOne, cellOne.value + 1)

const CellRecordHelper = {
  getViewValue,
  init,
  setValue,
  concat,
  equals,
}

export default CellRecordHelper