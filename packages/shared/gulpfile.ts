import {series} from 'gulp'
import {taskWithName} from '../../utils/task'
import path from 'path'
import { outDir } from '../../config/path'
import { rollupFile } from '../../build/utils/rollup'
// import { libExternal } from '../../config/build'
import { genTypes } from '../../build/utils/ts-morph'
import glob from 'fast-glob'
import { filePathIgnore, libExternal } from '../../config/build'


const getOutputFile = (filePath: string) => path.resolve(
  outDir, 
  `./shared/${path.relative(
    path.resolve(__dirname, './'), filePath,
  )
    .replace('.ts', '.js')}`,
)


export default series(
  
  taskWithName('bundleSharedJs', async () => {
    const filePaths = await glob('**/*', {
      cwd: path.resolve(__dirname, './'),
      onlyFiles: true,
      absolute: true,
      ignore: filePathIgnore,
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

  taskWithName('genSharedType', async () => {
    genTypes({
      filesRoot: path.resolve(__dirname, './'),
    })
  }),
)
