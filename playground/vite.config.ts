import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getPath, getEnv } from './config/utils'
import { windowEnv } from './config/plugin'
import vueJSX from '@vitejs/plugin-vue-jsx'

import viteSvgIcons from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = getEnv(mode)
  return {
    base: env.VITE_BASE_URL + '/',
    build: {
      outDir: getPath('/dist' + env.VITE_BASE_URL),
    },
    server: {
      host: '0.0.0.0',
    },
    resolve: {
      alias: {
        '_v': getPath('/src/views'),
        '_c': getPath('/src/components'),
        '@': getPath('/src'),
      },
    },

    plugins: [
      vue(),
      vueJSX(),
      windowEnv(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [getPath('/src/icons/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }

})
