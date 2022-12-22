import { PropType } from 'vue'
import { LoadEvent } from './types'
import { props as layerProps } from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerProps,
  defaultOptions: {
    type: Object as PropType<__esri.ImageryTileLayerProperties>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}