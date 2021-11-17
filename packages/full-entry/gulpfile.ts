import {series, parallel} from 'gulp'
import {taskWithName} from '../../utils/task'
import {libExternal} from '../../config/build'
import path from 'path'
import {mainRoot,outDir, workRoot} from '../../config/path'
import {rollup,OutputOptions} from 'rollup'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import {Project} from 'ts-morph'
import fs from 'fs/promises'
import { LIB_NAME } from '../../config/project'

// 使用 rollup 整体打包
const inputConfig = {
  input: path.resolve(mainRoot, './main.ts'),
  plugins: [
    nodeResolve({
      extensions: ['.js', '.json', '.ts'],
    }),
    vue(),
    esbuild(), 
  ],
  external: libExternal,
}
const outConfig: OutputOptions = {
  format: 'esm',
  file: path.resolve(outDir, './index.esm.js'),
}

export default series(
  taskWithName('bundleFullEntry', async ()=> {

    const bundle = await rollup(inputConfig)
    return bundle.write(outConfig)
  }),
  parallel(
    taskWithName('genEntryTypes', async () => { // 生成入口 .d.ts
      const mainPath = path.resolve(mainRoot, './main.ts')
      const outMainPath  = path.resolve(outDir, './index.d.ts')
      const project =  new Project({
        compilerOptions: {
          declaration: true,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          strict: false,
        },
        skipAddingFilesFromTsConfig: true,
        skipFileDependencyResolution: true,
        tsConfigFilePath: path.resolve(workRoot, './tsconfig.json'),
      })
      const sourceFile = project.addSourceFileAtPath(mainPath)
      await project.emit({
        emitOnlyDtsFiles: true,
      })
      const emitOutput = sourceFile.getEmitOutput()
      for (const outputFile of emitOutput.getOutputFiles()) {
        await fs.writeFile(outMainPath, outputFile.getText().replaceAll(`@${LIB_NAME}`, '.'), 'utf8')
      }
  
    }),

  ),

)