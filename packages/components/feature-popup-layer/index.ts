import { App } from 'vue'
import VaFeaturePopupLayer from './src/index.vue'
export * as __VaFeaturePopupLayer from './src/types'

VaFeaturePopupLayer.install = (app: App): void => {
  app.component(VaFeaturePopupLayer.name, VaFeaturePopupLayer)
}
export {
  VaFeaturePopupLayer,
}
export default VaFeaturePopupLayer
