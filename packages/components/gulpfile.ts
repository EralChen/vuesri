import { parallel } from 'gulp'
import { taskWithName } from '../../utils/task'
import { sync } from 'fast-glob'
import glob from 'fast-glob'
import path from 'path'
import { outDir } from '../../config/path'
import { rollupComponents, rollupFile } from '../../build/utils/rollup'
import { genTypes } from '../../build/utils/ts-morph'
import { filePathIgnore, libExternal } from '../../config/build'

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

  taskWithName('bundleComponentsTs', async () => {
    
    const getOutputFile = (filePath: string) => path.resolve(
      outDir, 
      `./components/${path.relative(
        path.resolve(__dirname, './'), filePath,
      )
        .replace('.ts', '.js')}`,
    )
    
    const filePaths = await glob('**/src/**/*.ts', {
      cwd: path.resolve(__dirname, './'),
      onlyFiles: true,
      absolute: true,
      ignore: [...filePathIgnore],
    })

    filePaths.forEach(item => {
      rollupFile({
        inputFile: item,
        outputFile: getOutputFile(item),
        format: 'esm',
        external: libExternal,
      })
    })

  }),

  taskWithName('genTypes', () => genTypes({
    filesRoot: path.resolve(__dirname, './'),
  })),
)
