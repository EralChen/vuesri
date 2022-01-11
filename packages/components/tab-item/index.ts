import { App } from 'vue'
import VkTabItem from './src/index.vue'
export * as __VkTabItem from './src/types'

VkTabItem.install = (app: App): void => {
  app.component(VkTabItem.name, VkTabItem)
}
export {
  VkTabItem,
}
export default VkTabItem
