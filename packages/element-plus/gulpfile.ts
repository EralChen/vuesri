import {series} from 'gulp'
import {taskWithName} from '../../utils/task'
import path from 'path'
import { outDir } from '../../config/path'
import { rollupFile } from '../../build/utils/rollup'
import { libExternal } from '../../config/build'
import { genTypes } from '../../build/utils/ts-morph'


const OUT_DIRNAME = 'element-plus'
const ENTRY_FILE = path.resolve(__dirname, './main.ts')
const OUT_FILE = path.resolve(outDir, `./${OUT_DIRNAME}/index.esm.js`)

export default series(
  taskWithName('bundleElementPlusPlugin', async ()=> {
    await rollupFile({
      file: ENTRY_FILE,
      outputFile: OUT_FILE,
      external: [...libExternal, 'element-plus'],
    })
  }),
  taskWithName('genElementPlusPluginType', async () => {
    genTypes({
      filesRoot: path.resolve(__dirname, './'),
    })
  }),
)
