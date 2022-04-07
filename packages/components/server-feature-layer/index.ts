import { App } from 'vue'
import VaServerFeatureLayer from './src/index.vue'
export * as __VaServerFeatureLayer from './src/types'

VaServerFeatureLayer.install = (app: App): void => {
  app.component(VaServerFeatureLayer.name, VaServerFeatureLayer)
}
export {
  VaServerFeatureLayer,
}
export default VaServerFeatureLayer
