import { App } from 'vue'
import VaBasemapToggleNextBasemapPlugin from './src/index.vue'

VaBasemapToggleNextBasemapPlugin.install = (app: App): void => {
  app.component(VaBasemapToggleNextBasemapPlugin.name, VaBasemapToggleNextBasemapPlugin)
}
export {
  VaBasemapToggleNextBasemapPlugin,
}
export default VaBasemapToggleNextBasemapPlugin
