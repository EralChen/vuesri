import { App } from 'vue'
import VaSceneLayer from './src/index.vue'
export * as __VaSceneLayer from './src/types'

VaSceneLayer.install = (app: App): void => {
  app.component(VaSceneLayer.name, VaSceneLayer)
}
export {
  VaSceneLayer,
}
export default VaSceneLayer
