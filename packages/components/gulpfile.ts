import { parallel } from 'gulp'
import { taskWithName } from '../../utils/task'
import { sync } from 'fast-glob'
import path from 'path'
import { outDir } from '../../config/path'
import {rollupComponents} from '../../build/utils/rollup'
import {genTypes} from '../../build/utils/ts-morph'

// sync 快速找到所有目录
const files = sync('*', {
  cwd: path.resolve(__dirname, './'),
  onlyDirectories: true,
  ignore: ['node_modules'],
})

export default parallel(
  taskWithName('bundleComponents', 
    () => rollupComponents({
      files,
      entry: (file)=> path.resolve(__dirname, file, './index.ts'),
      outputFile: (file) => path.resolve(outDir, `./components/${file}/index.js`),
    }),
  ),
  taskWithName('genTypes', () => genTypes({
    filesRoot: path.resolve(__dirname, './'),
  })),
)
