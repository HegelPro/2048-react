export const updateArray = (index: number) =>
  <V>(value: V) =>
    (array: V[]): V[] => {
      const copyArray = [...array]
      copyArray[index] = value
      return copyArray
    }
