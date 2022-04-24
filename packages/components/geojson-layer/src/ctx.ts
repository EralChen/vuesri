import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
import * as layerEventsCtx from '@vuesri/components/layer/src/graphics-events/ctx'
import { onEmitsFactory } from '@vuesri/shared/helper/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.GeoJSONLayerProperties>,
    default: () => ({}),
  },
  url: {
    type: String,
    default: '',
    required: true,
  },
  geometryType: {
    type: String as PropType<'point' | 'polygon' | 'polyline' | 'multipoint'>,
    required: true,
    default: '',
  },
  definitionExpression: {
    type: String,
    default: '1=1',
  },
  renderer: {
    type: Object as PropType<__esri.Renderer>,
    default: undefined,
  },
}

export const emits = {
  ...layerEventsCtx.emits,
  load: (e: LoadEvent) => e,
}

export const createLayerEventsOnEmits = layerEventsCtx.createOnEmits