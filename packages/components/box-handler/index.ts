import { App } from 'vue'
import VkBoxHandler from './src/index.vue'
export * as __VkBoxHandler from './src/types'

VkBoxHandler.install = (app: App): void => {
  app.component(VkBoxHandler.name, VkBoxHandler)
}
export {
  VkBoxHandler,
}
export default VkBoxHandler
