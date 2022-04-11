import { App } from 'vue'
import VaClientFeatureLayer from './src/index.vue'
export * as __VaClientFeatureLayer from './src/types'

VaClientFeatureLayer.install = (app: App): void => {
  app.component(VaClientFeatureLayer.name, VaClientFeatureLayer)
}
export {
  VaClientFeatureLayer,
}
export default VaClientFeatureLayer
