import { App } from 'vue'
import VaMapView from './src/index.vue'
export * as __VaMapView from './src/types'

VaMapView.install = (app: App): void => {
  app.component(VaMapView.name, VaMapView)
}
export {
  VaMapView,
}
export default VaMapView
