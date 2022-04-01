import { PropType } from 'vue'

export const props = {
  limitExtent: {
    type: Object as PropType<__esri.Extent>,
    default: undefined,
  },
}
