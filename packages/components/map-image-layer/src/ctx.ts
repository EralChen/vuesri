import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  url: {
    type: String,
    default: '',
  },
  defaultOptions: {
    type: Object as PropType<__esri.ImageryLayerProperties>,
    default: () => ({}),
  },
  sublayers: {
    type: Array as PropType<__esri.SublayerProperties[]>,
    default: undefined,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}