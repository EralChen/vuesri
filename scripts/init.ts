import {series} from 'gulp'
import { run, taskWithName } from '../utils/task'
import mri from 'mri'
import {sync} from 'fast-glob'
import { workRoot } from '../config/path'
import fs from 'fs/promises'
import path from 'path'
import { green } from '../utils/log'

// 获取参数
const argv = process.argv.slice(2)
type MriProperties = {
  name: string
  pre: string
}
const mriData = mri<MriProperties>(argv)


export default series(
  taskWithName('setName', async () => {
    if (!mriData.name) return
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
        const hasTemp = res.includes('--lib-name--')
        if (!hasTemp) return
        const nData = res.replaceAll('--lib-name--', mriData.name)
        return Promise.all([fs.writeFile(file, nData)]) 
      }).then((res) => {
        if (res) green(file + ':LIB_NAME renamed')
      })
    })
  }),
  taskWithName('setPre', async () => {
    if (!mriData.pre) return
    const projConfigPath = path.resolve(workRoot, './config/project.ts')
    let data = await fs.readFile(projConfigPath, {
      encoding: 'utf8',
    })
    data = data.replace(/LIB_PRE\s?=\s?'(.*)'/g, (match, $1) => {
      return match.replace($1, mriData.pre)
    })
    return fs.writeFile(projConfigPath, data)
  }), 
  taskWithName('pnpmReinstall', async () => {
    return run('pnpm i', workRoot)
  }),
)