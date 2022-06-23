import {series, src, dest} from 'gulp'
import {run, taskWithName} from '../utils/task'
import concat from 'gulp-concat'
import fs from 'fs/promises'
import path from 'path'
import {outDir, workRoot} from '../config/path'
import { sync } from 'fast-glob'
import { fixPath } from './utils/tools'
// 打包vue组件
const mainTask = series(
  taskWithName('clean', async () => run('rm -rf ./dist')),
  // 并行打包 packages 下的内容
  taskWithName('buildPackages', async () => run('pnpm run --filter "./packages/**" --parallel build')),

  // 合并所有css到入口
  taskWithName('buildCss', async () => {
    const cssFiles = sync('**/*.css', {
      cwd: outDir,
      onlyFiles: true,
    })
    src(cssFiles.map(css => path.resolve(outDir, css)))
      .pipe(
        concat('index.css'),
      )
      .pipe(dest(path.resolve(outDir)))
      
  }),

  // taskWithName('buildPackages', async () => run('pnpm run -C packages/components build')),
  // 拷贝types到外层
  taskWithName('copyTypes', async () => {
    fs.cp(path.resolve(outDir, 'types'), path.resolve(outDir), {
      recursive: true,
    })
  }),

  taskWithName('copyClientTypes', async () => {
    const text = await fs.readFile(path.resolve(workRoot, './typings/client.d.ts'))
    await fs.writeFile(path.resolve(outDir, './client.d.ts'), fixPath(text.toString()))
    
  }),
)
export default mainTask