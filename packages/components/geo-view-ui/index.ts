import { App } from 'vue'
import VaGeoViewUi from './src/index.vue'
export * as __VaGeoViewUi from './src/types'

VaGeoViewUi.install = (app: App): void => {
  app.component(VaGeoViewUi.name, VaGeoViewUi)
}
export {
  VaGeoViewUi,
}
export default VaGeoViewUi
