import { App } from 'vue'
import VaSceneView from './src/index.vue'
export * as __VaSceneView from './src/types'

VaSceneView.install = (app: App): void => {
  app.component(VaSceneView.name, VaSceneView)
}
export {
  VaSceneView,
}
export default VaSceneView
