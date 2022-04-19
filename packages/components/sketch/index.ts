import { App } from 'vue'
import VaSketch from './src/index.vue'
export * as __VaSketch from './src/types'

VaSketch.install = (app: App): void => {
  app.component(VaSketch.name, VaSketch)
}
export {
  VaSketch,
}
export default VaSketch
