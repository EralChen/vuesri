import { App } from 'vue'
import VaTdtWebTileLayer from './src/index.vue'

VaTdtWebTileLayer.install = (app: App): void => {
  app.component(VaTdtWebTileLayer.name, VaTdtWebTileLayer)
}
export {
  VaTdtWebTileLayer,
}
export default VaTdtWebTileLayer
