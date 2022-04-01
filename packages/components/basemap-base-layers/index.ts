import { App } from 'vue'
import VaBasemapBaseLayers from './src/index.vue'
export * as __VaBasemapBaseLayers from './src/types'

VaBasemapBaseLayers.install = (app: App): void => {
  app.component(VaBasemapBaseLayers.name, VaBasemapBaseLayers)
}
export {
  VaBasemapBaseLayers,
}
export default VaBasemapBaseLayers
