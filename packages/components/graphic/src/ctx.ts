import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as eventsCtx from './events/ctx'
export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.GraphicProperties>,
    default: () => ({}),
  },

  geometry: {
    type: Object as PropType<__esri.Geometry|__esri.GeometryProperties|null>,
    default: null,
  },
  symbol: {
    type: Object as PropType<__esri.Symbol>,
    default: () => ({
      type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
      color: [226, 119, 40],
    }),
  },
  attributes: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },

  visible: {
    type: Boolean,
    default: true,
  },
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: undefined,
  },

  index: {
    type: Number,
    default: undefined,
  },
  orphan: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  ...eventsCtx.emits,
  load: (e: LoadEvent) => e,
}
export const createEventsOnEmits = eventsCtx.createOnEmits