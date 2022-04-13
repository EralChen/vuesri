import { App } from 'vue'
import VaDerivedFeatureLayer from './src/index.vue'
export * as __VaDerivedFeatureLayer from './src/types'

VaDerivedFeatureLayer.install = (app: App): void => {
  app.component(VaDerivedFeatureLayer.name, VaDerivedFeatureLayer)
}
export {
  VaDerivedFeatureLayer,
}
export default VaDerivedFeatureLayer
