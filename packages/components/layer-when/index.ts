import { App } from 'vue'
import VaLayerWhen from './src/index.vue'
export * as __VaLayerWhen from './src/types'

VaLayerWhen.install = (app: App): void => {
  app.component(VaLayerWhen.name, VaLayerWhen)
}
export {
  VaLayerWhen,
}
export default VaLayerWhen
