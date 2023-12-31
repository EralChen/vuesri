import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as eventCtx from '@vuesri/components/view/src/events/ctx'
export const props = {
  ...eventCtx.props,
  defaultOptions: {
    type: Object as PropType< __esri.MapViewProperties>,
    default: () => ({}),
  },
  cursor: {
    type: String,
    default: '',
  },
}

export const emits = {
  ...eventCtx.emits,
  load: (e: LoadEvent) => e,
}