// 添加一个组件
import {series,parallel} from 'gulp'
import mri from 'mri'
import { taskWithName } from '../../../utils/task'
import path from 'path'
import { componentsPath, mainRoot } from '../../../config/path'
import { camelize, capitalize } from '../../../utils/string'
import fsPromises from 'fs/promises'
import {createIndexStr, createTypesStr, createVueStr} from './temp'
import { LIB_NAME } from '../../../config/project'
const argv = process.argv.slice(2)
const mriData = mri<{
  name: string,
  ground: string
}>(argv)
const capName = capitalize(camelize(mriData.name))
const componentPath = path.resolve(componentsPath, mriData.name)
const srcPath = path.resolve(componentPath, './src')
export default series(
  async () => fsPromises.mkdir(componentPath),
  async () => fsPromises.mkdir(srcPath),
  parallel(
    taskWithName('createIndex', async () => {
      return fsPromises.appendFile(
        path.resolve(componentPath, './index.ts'),
        createIndexStr(capName),
      )
    }),
    taskWithName('createTypesFile', async () => {
      return fsPromises.appendFile(
        path.resolve(srcPath, './types.ts'),
        createTypesStr(),
      )
    }),
    taskWithName('createVueFile', async () => {
      return fsPromises.appendFile(
        path.resolve(srcPath, './index.vue'),
        createVueStr(capName),
      )
    }),
    taskWithName('createPropFile', async () => {
      return fsPromises.appendFile(
        path.resolve(srcPath, './props.ts'),
        `import {} from 'vue'${'\n'
        }const props = {${'\n'
        }}${'\n'
        }export default props${'\n'
        }`,
      )
    }),
  ),
  taskWithName('exportFromMain', async () => {
    const mainPath = path.resolve(mainRoot, './main.ts')
    let mainStr = await fsPromises.readFile(mainPath, {
      encoding: 'utf8',
    })
    mainStr = mainStr + `export * from '@${LIB_NAME}/components/${mriData.name}'${'\n'}`
    await fsPromises.writeFile(mainPath, mainStr)
  }),
)