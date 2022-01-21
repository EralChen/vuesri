import {series, parallel} from 'gulp'
import {taskWithName} from '../../utils/task'
import {libExternal} from '../../config/build'
import path from 'path'
import {mainRoot,outDir} from '../../config/path'
import fs from 'fs/promises'
import { rollupFile } from '../../build/utils/rollup'
import { fixPath } from '../../build/utils'



export default series(
  taskWithName('bundleFullEntry', async ()=> {
    rollupFile({
      external: libExternal,
      inputFile: path.resolve(mainRoot, './main.ts'),
      outputFile: path.resolve(outDir, './index.esm.js'),
      format: 'esm',
    })
  }),
  parallel(
    taskWithName('genEntryTypes', async () => { // 生成入口 .d.ts
      const mainPath = path.resolve(mainRoot, './main.ts')
      const outMainPath  = path.resolve(outDir, './index.d.ts')
      const mainStr = await fs.readFile(mainPath, { encoding: 'utf8' })
      await fs.mkdir(path.dirname(outMainPath), {
        recursive: true,
      })
      await fs.writeFile(outMainPath, fixPath(mainStr))

    }),

  ),

)