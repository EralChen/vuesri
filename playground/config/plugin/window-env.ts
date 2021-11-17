import { PluginOption } from 'vite'
import { getEnv } from '../utils'
export default function windowEnv ():PluginOption {
  let mode = ''
  
  return {
    configResolved (resolvedConfig) {
      // 存储最终解析的配置
      mode = resolvedConfig.mode
    },

    name: 'window-env-plugin', // 必须的，将会在 warning 和 error 中显示
    transform (code) {
      if (code.includes('import.meta.env.')) {
        code = code.replace(/import\.meta\.env\./g, 'window.__env__.')
      }
      return code
    },
    transformIndexHtml (html) {
      return html.replace(`<script id="env"></script>`,
        `<script id="env">
          ${'window.__env__ =' + JSON.stringify(getEnv(mode))}
        </script>`)
    },
  }
}