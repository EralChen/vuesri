import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  spatialReference: {
    type: Object as PropType<__esri.SpatialReferenceProperties>,
    default: () => ({ wkid: 4326 }),
  },
  type: {
    type: String as PropType<'img_c' | 'vec_c' | 'ter_c' | 'img_w' | 'vec_w' | 'ter_w'>,
    default: 'img_c',
  },
  anno: {
    type: Boolean,
    default: true,
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}