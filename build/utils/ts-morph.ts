import { Project, SourceFile } from 'ts-morph'
import path from 'path'
import { mainRoot, outDir, workRoot } from '../../config/path'
import { LIB_NAME } from '../../config/project'
import glob from 'fast-glob'
import fs from 'fs/promises'
import * as vueCompiler from '@vue/compiler-sfc'
import { green, red, yellow } from '../../utils/log'
import { bold } from 'chalk'
import {fixPath} from  '../../build/utils'

export async function genTypes (opts: {
  filesRoot: string
}) { // 生成一个 .d.ts
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      strict: false,
      disableSizeLimit: true,
      outDir: path.resolve(outDir, 'types'),
      baseUrl: workRoot,
      paths: {
        [`@${LIB_NAME}/*`]: ['packages/*'],
      },
      skipLibCheck: true,
      skipDefaultLibCheck: true,
    },
    tsConfigFilePath: path.resolve(workRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true,
  })

  const filePaths = await glob('**/*', {
    cwd: opts.filesRoot,
    onlyFiles: true,
    absolute: true,
    ignore: ['gulpfile.ts', 'package.json', 'node_modules', '**/README.md'],
  })

  // 添加全局类型
  project.addSourceFilesAtPaths(path.resolve(workRoot, 'typings', './**/*{.d.ts,.ts}'))
  /* [TODO]固定.d.ts文件输入路径的临时解决方案，令outDir中目录结构于packages相同 */
  project.addSourceFilesAtPaths(path.resolve(mainRoot,  './main.ts'))

  const sourceFiles: SourceFile[] = []
  await Promise.all([
    ...filePaths.map(async (file) => {
      // 处理.vue文件成.ts文件
      if (file.endsWith('.vue')) {
        const content = await fs.readFile(file, 'utf-8')
        const sfc = vueCompiler.parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content = ''
          let isTS = false
          if (script && script.content) {
            content += script.content
            if (script.lang === 'ts') isTS = true
          }
          if (scriptSetup) {
            const compiled = vueCompiler.compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
            if (scriptSetup.lang === 'ts') isTS = true
          }
          const _file =  path.resolve(workRoot, file) + (isTS ? '.ts' : '.js')
          const sourceFile = project.createSourceFile(
            _file,
            content,
          )
          sourceFiles.push(sourceFile)
          yellow('添加的文件：' + _file)
        }
      } else if (file.endsWith('.ts')) {
        yellow('添加的文件：' + file)
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
  ])

  const diagnostics = project.getPreEmitDiagnostics()
  green(project.formatDiagnosticsWithColorAndContext(diagnostics))

  // 发射.d.ts 文件到内存
  await project.emit({
    emitOnlyDtsFiles: true,
  })

  const tasks = sourceFiles.map(async (sourceFile) => {
   
    const relativePath = path.relative(workRoot, sourceFile.getFilePath())
    yellow(`生成文件的相对路径: ${bold(relativePath)}`)
    // 获取发射的内存中的文件
    const emitOutput = sourceFile.getEmitOutput()
    const emitFiles = emitOutput.getOutputFiles()
    if (emitFiles.length === 0) {
      red(`没有找到要输出的文件: ${bold(relativePath)}`)
      return
    }

    // 生成实体文件
    const tasks = emitFiles.map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      /* [TODO]有没有方法能够固定输入的文件路径 */
      yellow(`写入文件的路径: ${bold(filepath)}`)
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      })

      await fs.writeFile(
        filepath,
        fixPath(outputFile.getText()),
        'utf8',
      )

    })

    await Promise.all(tasks)
  })

  await Promise.all(tasks)

}
