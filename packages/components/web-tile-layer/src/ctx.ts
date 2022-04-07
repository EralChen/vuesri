import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/shared/ctx/layer'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.WebTileLayerProperties>,
    default: () => ({}),
  },

}

export const emits = {
  load: (e: LoadEvent) => e,
}