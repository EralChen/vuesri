import { App } from 'vue'
import VaLimitExtent from './src/index.vue'

VaLimitExtent.install = (app: App): void => {
  app.component(VaLimitExtent.name, VaLimitExtent)
}
export {
  VaLimitExtent,
}
export default VaLimitExtent
