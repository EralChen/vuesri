import { App } from 'vue'
import VaViewUi from './src/index.vue'
export * as __VaViewUi from './src/types'

VaViewUi.install = (app: App): void => {
  app.component(VaViewUi.name, VaViewUi)
}
export {
  VaViewUi,
}
export default VaViewUi
