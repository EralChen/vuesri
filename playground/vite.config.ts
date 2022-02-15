import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import windowEnv from './build/plugins/window-env'
import { getEnv } from './utils/env'
import path from 'path'
import { srcRoot, workRoot } from './config/path'
import legacy from '@vitejs/plugin-legacy'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import pages from 'vite-plugin-pages'
import markdown from 'vite-plugin-md'
import markdownAnchor from 'markdown-it-anchor'
import { mdDemoPlugin } from './build/markdown/demo'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = getEnv(mode)
  return {
    base: env.VITE_BASE_URL + '/',
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    build: {
      outDir: path.resolve(workRoot, './dist' + env.VITE_BASE_URL),
    },
    server: {
      host: '0.0.0.0',
      port: 4321,
    },
    resolve: {
      alias: {
        '_v': path.resolve(srcRoot, './views'),
        '_c': path.resolve(srcRoot, './components'),
        '@': path.resolve(srcRoot, '.'),
      },
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      vueJSX(),
      pages({
        extensions: ['vue', 'md'],
      }),

      markdown({
        
        markdownItSetup (md) {
          // for example
          markdownAnchor(md)
          mdDemoPlugin(md)
        },
        wrapperComponent: "MdWrapper"
        // markdownItUses: [mdDemoPlugin],
      }),
      legacy({
        modernPolyfills: ['esnext.array.at'],
      }),
      windowEnv(),
      viteExternalsPlugin(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(srcRoot, './icons/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),

    ],
  }

})
