import {PropType} from 'vue'
import { Map } from 'mars3d'
const props = {
  /**
   * https://mars3d.cn/api/Map.html?classFilter=Map
   */
  defaultOptions: {
    type: Object as PropType<ConstructorParameters<typeof Map>['1']>,
    default: () => ({}),
  },
}
export default props
