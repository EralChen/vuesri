import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  geometry: {
    type: Object as PropType<__esri.Geometry>,
    default: undefined,
  },
  visible: {
    type: Boolean,
    default: true,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}