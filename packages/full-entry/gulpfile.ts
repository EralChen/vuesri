import {series, parallel} from 'gulp'
import {taskWithName} from '../../utils/task'
import {libExternal} from '../../config/build'
import path from 'path'
import {mainRoot,outDir, workRoot} from '../../config/path'
import {Project} from 'ts-morph'
import fs from 'fs/promises'
import { LIB_NAME } from '../../config/project'
import { rollupFile } from '../../build/utils/rollup'



export default series(
  taskWithName('bundleFullEntry', async ()=> {
    rollupFile({
      external: libExternal,
      inputFile: path.resolve(mainRoot, './main.ts'),
      outputFile: path.resolve(outDir, './index.esm.js'),
    })
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