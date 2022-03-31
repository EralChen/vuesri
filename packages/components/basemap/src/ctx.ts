import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  baseLayers: {
    type: Array as PropType<__esri.CollectionProperties<__esri.LayerProperties>| __esri.LayerProperties[]>,
    default: () => [],
  },
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: () => ({
      wkid: 4326,
    }),
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
  defaultOptions: {
    type: Object as PropType<__esri.BasemapProperties>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}