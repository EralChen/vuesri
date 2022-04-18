import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  query: {
    type: Object as PropType<__esri.supportQuery | __esri.supportQueryProperties | undefined>,
    default: {},
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  offsetZ: {
    type: Number,
    default: undefined,
  },
  maxScale: {
    type: Number,
    default: 0,
  },
  minScale: {
    type: Number,
    default: 0,
  },
}

export const emits = {
  'update:visible': (e: boolean) => typeof e === 'boolean',
  load: (e: LoadEvent) => e,
  change: (e: LoadEvent) => e,
}