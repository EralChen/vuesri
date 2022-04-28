import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.MapImageLayerProperties>,
    default: () => ({}),
  },
  url: {
    type: String,
    default: '',
    
  },
  extent: {
    type: Object as PropType<__esri.Extent>,
    required: true,
  },
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: () => ({
      wkid: 4326,
    }),
  },
  units: {
    type: String,
    default: '',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}