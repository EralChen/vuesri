import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  color: {
    type: Array as PropType<number[]>,
    default: () => [0, 0, 0, 0.7],
  },
  geometry: {
    type: Object as PropType<__esri.Geometry>,
    required: true,
  },
  distance: {
    type: Number,
    default: 24,
  },
  tileInfo: {
    type: Object as PropType<__esri.TileInfo>,
    default: undefined,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}