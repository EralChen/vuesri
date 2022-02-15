
export function getRootStyle (key: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(key).trim()
}

export function setRootStyle (opts: Record<string, string> = {}) {
  Reflect.ownKeys(opts).forEach(key => {
    if (typeof key === 'string') {
      document.documentElement.style.setProperty(key, opts[key])
    }
  })
}
