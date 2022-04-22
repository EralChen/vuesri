import {series} from 'gulp'
import {taskWithName, run} from '../utils/task'
import fs from 'fs/promises'
import path from 'path'
import { mainRoot, outDir } from '../config/path'
const pkgPath = path.resolve(mainRoot, './package.json')
export default series(
  taskWithName('update:vision', async () => {
    const file = await fs.readFile(pkgPath)
    const fileObj:{ version: string; module: string } = JSON.parse(file.toString())
    // 默认小版本+1
    const versionList = fileObj.version.split('.')
    const sVersion = versionList.at(-1)
    if (sVersion) {
      versionList[versionList.length - 1] = +sVersion + 1 + ''
    }
    fileObj.version = versionList.join('.')

    // 将入口改为 index.esm.js
    fileObj.module = 'index.esm.js'
        
    const nFileStr = JSON.stringify(fileObj, null, 2)

    
    await fs.writeFile(pkgPath, nFileStr)
  }),
  taskWithName('destPkg', async () => {
    fs.cp(
      pkgPath,
      path.resolve(outDir, './package.json'),
    )
  }),
  taskWithName('destMd', async () => {
    fs.cp(
      path.resolve(mainRoot, './README.md'),
      path.resolve(outDir, './README.md'),
    )
  }),
  taskWithName('publish', async () => {
    run(
      /* --tag dev */
      'npm publish --registry https://registry.npmjs.org',
      outDir,
    )
  }),
)
