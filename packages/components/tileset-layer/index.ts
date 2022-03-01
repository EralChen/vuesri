import { App } from 'vue'
import VumaTilesetLayer from './src/index.vue'
export * as __VumaTilesetLayer from './src/types'

VumaTilesetLayer.install = (app: App): void => {
  app.component(VumaTilesetLayer.name, VumaTilesetLayer)
}
export {
  VumaTilesetLayer,
}
export default VumaTilesetLayer
