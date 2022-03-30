export function lintPath (path: string) {
  return path.endsWith('/') ? path.slice(0, -1) : path
}
export function resolveFullPath (path: string, pPath = '') {
  path = lintPath(path)
  pPath = lintPath(pPath)
  const nPath =  path.startsWith('/') ? path : `${pPath}${path ? '/' : ''}${path}`
  return nPath
}