import { App } from 'vue'
import VaGraphicsLayer from './src/index.vue'
export * as __VaGraphicsLayer from './src/types'

VaGraphicsLayer.install = (app: App): void => {
  app.component(VaGraphicsLayer.name, VaGraphicsLayer)
}
export {
  VaGraphicsLayer,
}
export default VaGraphicsLayer
