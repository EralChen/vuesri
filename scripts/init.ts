import {series} from 'gulp'
import { taskWithName } from '../utils/task'
import mri from 'mri'
import {sync} from 'fast-glob'
import { workRoot } from '../config/path'
import fs from 'fs/promises'
import { green } from '../utils/log'
// 获取参数
const argv = process.argv.slice(2)
type MriProperties = {
  name: string
}
const mriData = mri<MriProperties>(argv)

export default series(
  taskWithName('setName', async () => {
    // 设置名称
    const files = sync('**/*', {
      cwd: workRoot,
      onlyFiles: true,
    })
    // 
    files.forEach((file) => {
      fs.readFile(file, {
        encoding: 'utf8',
      }).then(res => {
        const nData = res.replaceAll('[LIB_NAME]', mriData.name)
        return fs.writeFile(file, nData)
      }).then(() => {
        green(file + ':LIB_NAME renamed')
      })
    })

  
  }),
)