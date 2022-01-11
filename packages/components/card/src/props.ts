import {PropType} from 'vue'
const props = {
  tag: {
    type: String as PropType<'h1'|'h2'|'h3'|'h4'>,
    default: 'h2',
  },
}
export default props
