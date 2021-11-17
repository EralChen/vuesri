import {series} from 'gulp'
import {run, taskWithName} from '../utils/task'

// 打包vue组件
const mainTask = series(
  taskWithName('clean', async () => run('rm -rf ./dist')),
  // 并行打包 packages 下的内容
  taskWithName('buildPackages', async () => run('pnpm run --filter ./packages --parallel build')),
)
export default mainTask