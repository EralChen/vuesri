import {series} from 'gulp'
import {taskWithName} from '../../utils/task'
import path from 'path'
import { outDir } from '../../config/path'
import { rollupFile } from '../../build/utils/rollup'
import { libExternal } from '../../config/build'
import { genTypes } from '../../build/utils/ts-morph'


const OUT_DIRNAME = 'echarts'
const ENTRY_FILE = path.resolve(__dirname, './index.ts')
const OUT_FILE = path.resolve(outDir, `./${OUT_DIRNAME}/index.js`)

export default series(
  taskWithName('bundleEchartsPlugin', async ()=> {
    await rollupFile({
      inputFile: ENTRY_FILE,
      outputFile: OUT_FILE,
      external: [...libExternal, 'echarts'],
      format: 'esm',
    })
  }),
  taskWithName('genEchartsPluginType', async () => {
    genTypes({
      filesRoot: path.resolve(__dirname, './'),
    })
  }),
)
