import { App } from 'vue'
import VaGraphic from './src/index.vue'
export * as __VaGraphic from './src/types'

VaGraphic.install = (app: App): void => {
  app.component(VaGraphic.name, VaGraphic)
}
export {
  VaGraphic,
}
export default VaGraphic
