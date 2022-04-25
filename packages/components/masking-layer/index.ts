import { App } from 'vue'
import VaMaskingLayer from './src/index.vue'
export * as __VaMaskingLayer from './src/types'

VaMaskingLayer.install = (app: App): void => {
  app.component(VaMaskingLayer.name, VaMaskingLayer)
}
export {
  VaMaskingLayer,
}
export default VaMaskingLayer
