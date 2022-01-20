export function debounce<T extends AnyFunc> (cb: T, wait = 20): T {
  let timeout = 0
  return function (this: any, ...args: any[]) {
    if (timeout > 0) {
      clearTimeout(timeout)
    }
    timeout = window.setTimeout(() => {
      cb.apply(this, args)
    }, wait)
  } as T
}