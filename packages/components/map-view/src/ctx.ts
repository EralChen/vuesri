import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as eventCtx from './events/ctx'
export const props = {
  ...eventCtx.props,
  defaultOptions: {
    type: Object as PropType< __esri.MapViewProperties>,
    default: () => ({}),
  },
}

export const emits = {
  ...eventCtx.emits,
  load: (e: LoadEvent) => e,
}