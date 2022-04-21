import { App } from 'vue'
import VaTreeLayerItem from './src/index.vue'

VaTreeLayerItem.install = (app: App): void => {
  app.component(VaTreeLayerItem.name, VaTreeLayerItem)
}
export {
  VaTreeLayerItem,
}
export default VaTreeLayerItem
