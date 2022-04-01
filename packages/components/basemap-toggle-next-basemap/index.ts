import { App } from 'vue'
import VaBasemapToggleNextBasemap from './src/index.vue'

VaBasemapToggleNextBasemap.install = (app: App): void => {
  app.component(VaBasemapToggleNextBasemap.name, VaBasemapToggleNextBasemap)
}
export {
  VaBasemapToggleNextBasemap,
}
export default VaBasemapToggleNextBasemap
