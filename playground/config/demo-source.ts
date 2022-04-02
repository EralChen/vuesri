import { mergeImport } from '../utils/string'

/**
 * 还原别名
 * @param source 
 * @returns 
 */
export const restoreAlias = (source: string) => {
  source = source
    .replace(
      /import(.+)from\s['|"]@vuesri\/components\/(.+)['|"]/g, 
      function (a, p1, p2){
        return `import${p1}from 'vuesri'`
      },
    )
  source = mergeImport(source)
  return source
}