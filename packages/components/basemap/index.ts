import { App } from 'vue'
import VaBasemap from './src/index.vue'
export * as __VaBasemap from './src/types'

VaBasemap.install = (app: App): void => {
  app.component(VaBasemap.name, VaBasemap)
}
export {
  VaBasemap,
}
export default VaBasemap
