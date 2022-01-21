import { App } from 'vue'
import VkBoxHandler from './src/index.vue'

VkBoxHandler.install = (app: App): void => {
  app.component(VkBoxHandler.name, VkBoxHandler)
}
export {
  VkBoxHandler,
}
export default VkBoxHandler
