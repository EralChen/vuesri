import {series} from 'gulp'
import {taskWithName} from '../../utils/task'
import {libExternal} from '../../config/build'
import path from 'path'
import {outDir} from '../../config/path'
import {rollup,OutputOptions} from 'rollup'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import css from 'rollup-plugin-css-only'

// 使用 rollup 整体打包
const inputConfig = {
  input: path.resolve(__dirname, './main.ts'),
  plugins: [
    nodeResolve({
      extensions: ['.js', '.json', '.ts'],
    }),
    css({
      output: 'index.css',
    }),
    vue(),
    esbuild(), 
  ],
  external: [...libExternal, 'element-plus'],
}
const outConfig: OutputOptions = {
  format: 'esm',
  file: path.resolve(outDir, './element-plus/index.esm.js'),
}

export default series(
  taskWithName('bundleFullEntry', async ()=> {
    const bundle = await rollup(inputConfig)
    return bundle.write(outConfig)
  }),
)