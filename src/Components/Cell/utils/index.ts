import {
  MIN_VALUE,
  MAX_VALUE,
  FIRST_COLOR,
  SECOND_COLOR,
} from './config'

function selectColorRatio(value: number): number {
  if (value < MIN_VALUE) {
    return MIN_VALUE
  }
  if (value > MAX_VALUE) {
    return MAX_VALUE
  }
  return value / MAX_VALUE
}

function selectColor(startColor: number, endColor: number, ratio: number) {
  const selectBetween = endColor - startColor
  return startColor + Math.floor(selectBetween * ratio)
}

export function selectCellColor(value: number) {
  const colorRatio = selectColorRatio(value)
  return `rgb(${
    selectColor(FIRST_COLOR.red, SECOND_COLOR.red, colorRatio)
  },${
    selectColor(FIRST_COLOR.green, SECOND_COLOR.green, colorRatio)
  },${
    selectColor(FIRST_COLOR.blue, SECOND_COLOR.blue, colorRatio)
  })`
}
