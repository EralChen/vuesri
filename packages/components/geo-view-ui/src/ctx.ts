import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  geometry: {
    type: Object as PropType<__esri.Geometry>,
    default: undefined,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}