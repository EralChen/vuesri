import { App } from 'vue'
import VaGeojsonLayer from './src/index.vue'
export * as __VaGeojsonLayer from './src/types'

VaGeojsonLayer.install = (app: App): void => {
  app.component(VaGeojsonLayer.name, VaGeojsonLayer)
}
export {
  VaGeojsonLayer,
}
export default VaGeojsonLayer
