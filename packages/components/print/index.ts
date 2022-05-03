import { App } from 'vue'
import VaPrint from './src/index.vue'
export * as __VaPrint from './src/types'

VaPrint.install = (app: App): void => {
  app.component(VaPrint.name, VaPrint)
}
export {
  VaPrint,
}
export default VaPrint
