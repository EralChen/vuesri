import { App } from 'vue'
import VaSkyBasemap from './src/index.vue'
export * as __VaSkyBasemap from './src/types'

VaSkyBasemap.install = (app: App): void => {
  app.component(VaSkyBasemap.name, VaSkyBasemap)
}
export {
  VaSkyBasemap,
}
export default VaSkyBasemap
