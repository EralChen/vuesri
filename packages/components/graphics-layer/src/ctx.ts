import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.GraphicsLayerProperties>,
    default: () => ({}),
  },
}
export const createLayerBindProps = layerCtx.createBindProps

export const emits = {
  load: (e: LoadEvent) => e,
}