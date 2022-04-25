import { App } from 'vue'
import VaPictureLayer from './src/index.vue'
export * as __VaPictureLayer from './src/types'

VaPictureLayer.install = (app: App): void => {
  app.component(VaPictureLayer.name, VaPictureLayer)
}
export {
  VaPictureLayer,
}
export default VaPictureLayer
