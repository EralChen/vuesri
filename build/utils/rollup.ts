
import { fixPath } from  './tools'
import { rollup, InputOptions, OutputOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import {LIB_NAME} from '../../config/project'
import {libExternal} from '../../config/build'
import commonjs from '@rollup/plugin-commonjs'

export function rollupComponents (opts: {
  files: string[],
  entry: (file: string) => string,
  outputFile: (file: string) => string
}) {
  const builds = opts.files.map(async (file: string) => {
    const entry = opts.entry(file)  // 入口
    const inputConfig: InputOptions = {
      input: entry,
      plugins: [
        css({
          output: 'index.css',
        }),
        vue({
          preprocessStyles: false,
        }),
        nodeResolve({
          extensions: ['.json', '.js',  '.ts'],
        }),
        esbuild(),
      ],
      external: [
        ...libExternal, 
        new RegExp(`^@${LIB_NAME}`),
      ],
    }
    const bundle = await rollup(inputConfig)

    const outputConfig: OutputOptions = {
      format: 'esm',
      file: opts.outputFile(file),
      paths: fixPath, // 修改别名到真实路径
    }
    await bundle.write(outputConfig)
  })
  return Promise.all(builds)
}

export async function rollupFile (opts: {
  inputFile: string,
  outputFile: string
  external: string[]
  format: 'umd'|'esm'
}) {
  const inputConfig = {
    input: opts.inputFile,
    
    plugins: [
      nodeResolve({
        extensions: ['.js', '.json', '.ts'],
        browser: true,
      }),
      css({
        output: 'index.css',
      }),
      vue(),
      esbuild(), 
      commonjs(),
    ],
    external: opts.external,
  }
  const outConfig: OutputOptions = {
    
    format: 'esm',
    file: opts.outputFile,
  } 
  const bundle = await rollup(inputConfig)
  return bundle.write(outConfig)

}

