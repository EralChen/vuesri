import { App } from 'vue'
import VaWmsLayer from './src/index.vue'
export * as __VaWmsLayer from './src/types'

VaWmsLayer.install = (app: App): void => {
  app.component(VaWmsLayer.name, VaWmsLayer)
}
export {
  VaWmsLayer,
}
export default VaWmsLayer
