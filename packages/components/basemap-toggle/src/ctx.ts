import { UiAddPosition } from '@vuesri/shared/types'
import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.BasemapToggleProperties>,
    default: () => ({}),
  },
  position: {
    type: [String, Object] as PropType<UiAddPosition>,
    default: 'bottom-right',
  },
  visible: {
    type: Boolean,
    default: true,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}