import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}