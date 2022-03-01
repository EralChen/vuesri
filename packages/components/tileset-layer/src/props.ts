import {PropType} from 'vue'
import { DefaultOptions } from './types'
const props = {
  defaultOptions: {
    type: Object as PropType<DefaultOptions>,
    default: () => ({}),
  },
}
export default props
