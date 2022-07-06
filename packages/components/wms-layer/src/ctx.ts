import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}