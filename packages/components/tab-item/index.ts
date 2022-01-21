import { App } from 'vue'
import VkTabItem from './src/index.vue'

VkTabItem.install = (app: App): void => {
  app.component(VkTabItem.name, VkTabItem)
}
export {
  VkTabItem,
}
export default VkTabItem
