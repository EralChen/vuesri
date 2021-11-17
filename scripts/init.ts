import {series} from 'gulp'
import { run, taskWithName } from '../utils/task'
import mri from 'mri'
import {sync} from 'fast-glob'
import { workRoot } from '../config/path'
import fs from 'fs/promises'
// import path from 'path'
import { green, red } from '../utils/log'
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
      absolute: true,
      ignore: ['node_modules', '**/node_modules'],
    })
    // 
    return files.map((file) => {
      // if (path.resolve(file) === path.resolve(__filename)) return
      return fs.readFile(file, {
        encoding: 'utf8',
      }).then(res => {
        const hasTemp = res.includes('[LIB_NAME]')
        if (!hasTemp) return
        const nData = res.replaceAll('[LIB_NAME]', mriData.name)
        return Promise.all([fs.writeFile(file, nData)]) 
      }).then((res) => {
        if (res) green(file + ':LIB_NAME renamed')
      })
    })
  }),
  taskWithName('pnpmReinstall', async () => {
    return run('pnpm i', workRoot)
  }),
)