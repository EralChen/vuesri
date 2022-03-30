
// 添加一个组件
import {parallel, series} from 'gulp'
import mri from 'mri'
import { taskWithName } from '../../../utils/task'
import path from 'path'
import { playgroundRoot } from '../../../config/path'
import fsPromises from 'fs/promises'
import { createMdStr, createVueStr } from './temp'
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
const demoVuePath  = `${DEMODIR}/${mriData.name}/index.vue`
export default series(
  parallel(
    // 在demo的 ${DEMODIR} 文件下添加 一个 mri.name 命名文件夹, 并生成一个 index.vue
    taskWithName('playground:createView', async () => {
      const componentsDemoRoot = path.resolve(playgroundDemos, DEMODIR)
      const componentPath = path.resolve(componentsDemoRoot, `./${mriData.name}`)
      await fsPromises.mkdir(componentPath, {recursive: true})
      await fsPromises.writeFile(path.resolve(componentPath, './index.vue'), createVueStr(capName))
    }),


    // 在 docs components 下创建一个, mri.name 命名的 md 文件
    taskWithName('playground:createMd', async () => {
      const pagesDocsRoot = path.resolve(playgroundRoot, './src/pages/docs')
      const componentsRoot = path.resolve(pagesDocsRoot, './components')
      await fsPromises.writeFile(path.resolve(componentsRoot, `./${mriData.name}.md`), createMdStr({
        name: capName,
        demoPath: demoVuePath,
      }))
    }),

  ),
) 