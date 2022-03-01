
// 添加一个组件
import {parallel, series} from 'gulp'
import mri from 'mri'
import { taskWithName } from '../../../utils/task'
import path from 'path'
import { playgroundRoot } from '../../../config/path'
import fsPromises from 'fs/promises'
import { createVueStr } from './temp'
import { camelize, capitalize } from '../../../utils/string'
const argv = process.argv.slice(2)
const mriData = mri<{
  name: string,
}>(argv)
const playgroundDemos = path.resolve(playgroundRoot, './src/demos')
const DEMODIR = '_demo-components'
const capName = capitalize(camelize(mriData.name))
// 创建一个新组件时，在playground下生成一个 基础的demo文件
// 在demo的 ${DEMODIR} 文件下添加 一个 mri.name 命名文件夹, 并生成一个 index.vue, 在demos/index.ts下添加映射
export default series(
  parallel(
    // 在demos/index.ts下添加映射
    taskWithName('playground:addToDemosRecord', async () => {
      const demosRecordFile = path.resolve(playgroundDemos, `./index.ts`)
      let data = await fsPromises.readFile(demosRecordFile, { encoding: 'utf8' })
      data = data.replace(/export\sdefault\s\[((.|\s)*?)\]/, (match, $1) => {
        const nRoute = [
          `    '${DEMODIR}/${mriData.name}/index.vue': () => import('./${DEMODIR}/${mriData.name}/index.vue'),`,
        ]
        return match.replace($1, $1 + nRoute.join('\n'))
      })
      return fsPromises.writeFile(demosRecordFile, data)
    }),

    taskWithName('playground:createView', async () => {
      const componentsDemoRoot = path.resolve(playgroundDemos, DEMODIR)
      const componentPath = path.resolve(componentsDemoRoot, `./${mriData.name}`)
      await fsPromises.mkdir(componentPath, {recursive: true})
      await fsPromises.writeFile(path.resolve(componentPath, './index.vue'), createVueStr(capName))
    }),
  ),
) 