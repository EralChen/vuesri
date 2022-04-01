import { App } from 'vue'
import VaTileLayer from './src/index.vue'
export * as __VaTileLayer from './src/types'

VaTileLayer.install = (app: App): void => {
  app.component(VaTileLayer.name, VaTileLayer)
}
export {
  VaTileLayer,
}
export default VaTileLayer
