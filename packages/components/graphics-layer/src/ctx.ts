import { PropType } from 'vue'
import { LoadEvent } from './types'
import * as layerCtx from '@vuesri/components/layer/src/ctx'
import * as eventsCtx  from './events/ctx'
export const props = {
  ...layerCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.GraphicsLayerProperties>,
    default: () => ({}),
  },
}

export const emits = {
  ...eventsCtx.emits,
  load: (e: LoadEvent) => e,
}

export const createEventsOnEmits = eventsCtx.createOnEmits
