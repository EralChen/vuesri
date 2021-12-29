import {series} from 'gulp'
import {run, taskWithName} from '../utils/task'
import fs from 'fs/promises'
import path from 'path'
import {outDir} from '../config/path'
// 打包vue组件
const mainTask = series(
  taskWithName('clean', async () => run('rm -rf ./dist')),
  // 并行打包 packages 下的内容
  taskWithName('buildPackages', async () => run('pnpm run --filter ./packages --parallel build')),
  // 拷贝types到外层
  taskWithName('copyTypes', async () => {
    fs.cp(path.resolve(outDir, 'types'), path.resolve(outDir), {
      recursive: true,
    })
  }),
)
export default mainTask