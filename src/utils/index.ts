export type Procedure = (...args: any[]) => void

export interface IOptions {
  isImmediate: boolean,
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: IOptions = {
    isImmediate: false,
  },
): F {
  let timeoutId: NodeJS.Timeout | undefined

  return function(this: any, ...args: any[]) {
    const context = this

    const doLater = () => {
      timeoutId = undefined
      if (!options.isImmediate) {
        func.apply(context, args)
      }
    }

    const shouldCallNow = options.isImmediate && timeoutId === undefined

    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(doLater, waitMilliseconds)

    if (shouldCallNow) {
      func.apply(context, args)
    }
  } as any
}
