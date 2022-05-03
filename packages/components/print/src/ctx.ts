import { UiAddPosition } from '@vuesri/shared/types'
import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.PrintProperties>,
    default: () => ({}),
  },
  position: {
    type: String as PropType<UiAddPosition>,
    default: 'top-right',
  },
  orphan: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}