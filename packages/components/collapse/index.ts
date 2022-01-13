import { App } from 'vue'
import VkCollapse from './src/index.vue'
VkCollapse.install = (app: App): void => {
  app.component(VkCollapse.name, VkCollapse)
}
export {
  VkCollapse,
}
export default VkCollapse
