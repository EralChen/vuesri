import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
import windowEnv from './build/plugins/window-env'
import { getEnv } from './utils/env'
import path from 'path'
import { srcRoot, workRoot } from './config/path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = getEnv(mode)
  return {
    base: env.VITE_BASE_URL + '/',
    build: {
      outDir: path.resolve(workRoot,'./dist' + env.VITE_BASE_URL),
    },
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '_v': path.resolve(srcRoot,'./views'),
        '_c': path.resolve(srcRoot,'./components'),
        '@': path.resolve(srcRoot,'.'),
      },
    },

    plugins: [
      vue(),
      vueJSX(),
      windowEnv(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(srcRoot,'./icons/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }

})
