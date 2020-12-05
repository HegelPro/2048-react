import curry from './curry'

export const updateArray = curry(<V>(index: number, value: V, array: V[]): V[] => {
  const copyArray = [...array]
  if (copyArray[index] !== undefined) {
    copyArray[index] = value
  }
  return copyArray
})
