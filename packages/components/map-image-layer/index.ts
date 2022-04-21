import { App } from 'vue'
import VaMapImageLayer from './src/index.vue'
export * as __VaMapImageLayer from './src/types'

VaMapImageLayer.install = (app: App): void => {
  app.component(VaMapImageLayer.name, VaMapImageLayer)
}
export {
  VaMapImageLayer,
}
export default VaMapImageLayer
