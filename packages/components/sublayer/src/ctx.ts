import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.SublayerProperties>,
    default: () => ({}),
  },
  id: {
    type: Number,
    default: 0,
  },
  renderer: {
    type: Object as PropType<__esri.Renderer>,
    default: undefined,
  },
  definitionExpression: {
    type: String,
    default: '1=1',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}