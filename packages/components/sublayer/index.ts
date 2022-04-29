import { App } from 'vue'
import VaSublayer from './src/index.vue'
export * as __VaSublayer from './src/types'

VaSublayer.install = (app: App): void => {
  app.component(VaSublayer.name, VaSublayer)
}
export {
  VaSublayer,
}
export default VaSublayer
