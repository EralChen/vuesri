import { App } from 'vue'
import VkCard from './src/index.vue'

VkCard.install = (app: App): void => {
  app.component(VkCard.name, VkCard)
}
export {
  VkCard,
}
export default VkCard
