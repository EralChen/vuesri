import { App } from 'vue'
import VkTabGroup from './src/index.vue'
import * as VkTabGroupSymbol from './src/symbol'

VkTabGroup.install = (app: App): void => {
  app.component(VkTabGroup.name, VkTabGroup)
}
export {
  VkTabGroup,
  VkTabGroupSymbol,
}
export default VkTabGroup
