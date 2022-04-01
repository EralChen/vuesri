import { App } from 'vue'
import VaBasemapToggle from './src/index.vue'
export * as __VaBasemapToggle from './src/types'

VaBasemapToggle.install = (app: App): void => {
  app.component(VaBasemapToggle.name, VaBasemapToggle)
}
export {
  VaBasemapToggle,
}
export default VaBasemapToggle
