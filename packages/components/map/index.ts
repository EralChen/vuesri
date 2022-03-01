import { App } from 'vue'
import VumaMap from './src/index.vue'
export * as __VumaMap from './src/types'

VumaMap.install = (app: App): void => {
  app.component(VumaMap.name, VumaMap)
}
export {
  VumaMap,
}
export default VumaMap
