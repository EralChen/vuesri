import { App } from 'vue'
import VaPopupTemplate from './src/index.vue'
export * as __VaPopupTemplate from './src/types'

VaPopupTemplate.install = (app: App): void => {
  app.component(VaPopupTemplate.name, VaPopupTemplate)
}
export {
  VaPopupTemplate,
}
export default VaPopupTemplate
