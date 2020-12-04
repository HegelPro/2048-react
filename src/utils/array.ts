export const updateArray = (index: number) =>
  <V>(value: V) =>
    (array: V[]): V[] => {
      const copyArray = [...array]
      if (copyArray[index] !== undefined) {
        copyArray[index] = value
      }
      return copyArray
    }
