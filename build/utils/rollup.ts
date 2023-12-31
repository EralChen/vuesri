
import { fixPath } from  './tools'
import { rollup, InputOptions, OutputOptions } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import {LIB_NAME} from '../../config/project'
import {libExternal} from '../../config/build'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
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
        alias({
          entries: [
            { find: 'esri', replacement: '@arcgis/core' },
          ],
        }),
        css({
          output: 'index.css',
        }),
        vue({
          preprocessStyles: false,
        }),
        nodeResolve({
          extensions: ['.json', '.js',  '.ts'],
        }),
        esbuild({
          target: 'ES6',
        }),
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
  external: (string | RegExp)[]
  format: 'umd'|'esm'
}) {
  const inputConfig = {
    input: opts.inputFile,
    
    plugins: [
      alias({
        entries: [
          { find: 'esri', replacement: '@arcgis/core' },
        ],
      }),
      nodeResolve({
        extensions: ['.js', '.json', '.ts'],
        browser: true,
      }),
      css({
        output: 'index.css',
      }),
      vue(),
      esbuild({
        target: 'ES6',
      }), 
      commonjs(),
    ],
    external: [...opts.external,  new RegExp(`^@${LIB_NAME}`)],
  }
  const outConfig: OutputOptions = {
    format: 'esm',
    file: opts.outputFile,
    paths: fixPath,
  } 
  const bundle = await rollup(inputConfig)
  return bundle.write(outConfig)

}

