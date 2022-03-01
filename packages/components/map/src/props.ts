import {PropType} from 'vue'
import { DefaultOptions } from './types'
const props = {
  /**
   * https://mars3d.cn/api/Map.html?classFilter=Map
   */
  defaultOptions: {
    type: Object as PropType<DefaultOptions>,
    default: () => ({}),
  },
}
export default props
