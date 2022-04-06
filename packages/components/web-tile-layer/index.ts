import { App } from 'vue'
import VaWebTileLayer from './src/index.vue'
export * as __VaWebTileLayer from './src/types'

VaWebTileLayer.install = (app: App): void => {
  app.component(VaWebTileLayer.name, VaWebTileLayer)
}
export {
  VaWebTileLayer,
}
export default VaWebTileLayer
