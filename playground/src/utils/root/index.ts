export function getRootStyle (key: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(key).trim()
}
