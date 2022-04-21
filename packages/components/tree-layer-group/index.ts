import { App } from 'vue'
import VaTreeLayerGroup from './src/index.vue'
export * as __VaTreeLayerGroup from './src/types'

VaTreeLayerGroup.install = (app: App): void => {
  app.component(VaTreeLayerGroup.name, VaTreeLayerGroup)
}
export {
  VaTreeLayerGroup,
}
export default VaTreeLayerGroup
