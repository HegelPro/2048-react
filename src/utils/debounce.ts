type Procedure = (...args: any[]) => void

interface IOptions {
  isImmediate: boolean,
}

export function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 50,
  options: IOptions = {
    isImmediate: false,
  },
): F {
  let timeoutId: number | undefined

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

    timeoutId = window.setTimeout(doLater, waitMilliseconds)

    if (shouldCallNow) {
      func.apply(context, args)
    }
  } as F
}
