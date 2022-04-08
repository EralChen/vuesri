import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.SceneViewProperties>,
    default: () => ({}),
  },
  cursor: {
    type: String,
    default: '',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}