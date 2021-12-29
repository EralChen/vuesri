import { App } from 'vue'
import CxButton from './src/index.vue'
export * as __CxButton from './src/types'

CxButton.install = (app: App): void => {
  app.component(CxButton.name, CxButton)
}
export {
  CxButton,
}
export default CxButton
