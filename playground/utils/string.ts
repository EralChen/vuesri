export function mergeImport (str: string) {
  const matchAll = str.matchAll(/import\s*{(.+)}\s*from\s['|"](?<name>[A-Za-z]+)['|"]/g)
  const matchArr =  [...matchAll]
  const matchMap = matchArr.reduce((a, c) => {
    if (c.groups?.name) {
      if (a[c.groups.name]) {
        a[c.groups.name].push(c)
      } else {
        a[c.groups.name] = [c]
      }
    }
    return a
  },{} as Record<string, RegExpMatchArray[]>)

  for (const key in matchMap) {
    if (Object.prototype.hasOwnProperty.call(matchMap, key)) {
      const arr = matchMap[key]
      const importMerge = `import { ${
        arr
          .map(item => item[1])
          .join(',').split(',')
          .map(item => item.trim())
          .join(', ')
      } } from '${key}'`

      arr.forEach((item, index) => {
        const s = item[0]
        if (index === 0) {
          str = str.replace(s, importMerge)
        } else {
          const reg = new RegExp(s + '\\s*')
          str = str.replace(reg, '')
        }
      })
    
    }
  }
  return str
}
