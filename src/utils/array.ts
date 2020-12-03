export const updateArray = (index: number) =>
  <V>(value: V) =>
    (array: V[]): V[] =>
      array.reduce<V[]>(
        (res, curValue, curIndex) => [...res, curIndex === index ? value : curValue],
        [],
      )
