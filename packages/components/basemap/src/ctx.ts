import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  baseLayers: {
    type: Array as PropType<__esri.CollectionProperties<__esri.LayerProperties>| __esri.LayerProperties[]>,
    default: () => [],
    required: true,
  },
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: undefined,
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
  custom: {
    type: Boolean,
    default: false,
  },
  defaultOptions: {
    type: Object as PropType<__esri.BasemapProperties>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}