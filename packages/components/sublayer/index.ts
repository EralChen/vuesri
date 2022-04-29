import { App } from 'vue'
import VaSublayer from './src/index.vue'
import ProvideSubLayers from './src/ProvideSubLayers.vue'
export * as __VaSublayer from './src/types'

VaSublayer.install = (app: App): void => {
  app.component(VaSublayer.name, VaSublayer)
}
export {
  ProvideSubLayers,
  VaSublayer,
}
export default VaSublayer
