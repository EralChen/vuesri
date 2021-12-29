import path from 'path'
import {readFileSync} from 'fs'
import { workRoot } from '../config/path'
export function getEnv (mode: string): ImportMetaEnv {
  const envFilePath = path.resolve(workRoot, `./.env.${mode}`)
  const data = readFileSync(envFilePath).toString()
  const res = {} as ImportMetaEnv
  data.split('\n').forEach((line) => {
    const keyValueArr = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      let value = keyValueArr[2] || ''
      const len = value ? value.length : 0
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n')
      }
      value = value.replace(/(^['"]|['"]$)/g, '').trim()
      res[key] = value
    }
  })
  return res  
}