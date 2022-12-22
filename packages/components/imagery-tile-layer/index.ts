import { App } from 'vue'
import VaImageryTileLayer from './src/index.vue'
export * as __VaImageryTileLayer from './src/types'

VaImageryTileLayer.install = (app: App): void => {
  app.component(VaImageryTileLayer.name, VaImageryTileLayer)
}
export {
  VaImageryTileLayer,
}
export default VaImageryTileLayer
