import { App } from 'vue'
import VaViewWhen from './src/index.vue'
export * as __VaViewWhen from './src/types'

VaViewWhen.install = (app: App): void => {
  app.component(VaViewWhen.name, VaViewWhen)
}
export {
  VaViewWhen,
}
export default VaViewWhen
