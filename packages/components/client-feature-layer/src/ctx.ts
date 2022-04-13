import { PropType } from 'vue'
import { ChangeEvent, LoadEvent } from './types'
import * as featureLayerCtx from '@vuesri/components/feature-layer/src/ctx'
import { onEmitsFactory } from '@vuesri/shared/helper/ctx'
export const props = {
  ...featureLayerCtx.props,
  source: {
    type: [Object, Array] as PropType<__esri.Collection<__esri.Graphic>|__esri.Graphic[]>,
    required: true,
    default: () => [],
  },
  fields: {
    type: Array as PropType<__esri.FieldProperties[]>,
    required: true,
    default: () => [],
  },
  geometryType: {
    type: String as PropType<__esri.FeatureLayer['geometryType']>,
    default: 'point',
    required: true,
  },
  objectIdField: {
    type: String,
    default: 'ObjectID',
  },

  forceUpdate: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  ...featureLayerCtx.emits,
  change: (e: ChangeEvent) => e,
  load: (e: LoadEvent) => e,
}

export const createOnEmits = onEmitsFactory(emits)
