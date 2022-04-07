import { levelToScale } from '@vuesri/shared/config/tile-info/4490'
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
  orphan: {
    type: Boolean,
    default: false,
  },
  anno: {
    type: Boolean,
    default: true,
  },
  thumbnailUrl: {
    type: String,
    default: '',
  },
  minScale: {
    type: Number,
    default: levelToScale[1],
  },
  maxScale: {
    type: Number,
    default: levelToScale[18],
  },
  lodsLevel: {
    type: Array as PropType<number[]>,
    default: () => [1, 18],
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}