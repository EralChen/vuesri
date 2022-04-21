import { UiAddPosition } from '@vuesri/shared/types'
import { PropType } from 'vue'
import { AvailableCreatureTool, LoadEvent } from './types'
import * as eventsCtx from './events/ctx'
export const props = {
  ...eventsCtx.props,
  defaultOptions: {
    type: Object as PropType<__esri.SketchProperties>,
    default: () => ({}),
  },
  availableCreatureTools: {
    type: Array as PropType<AvailableCreatureTool[]>,
    default: undefined,
  },
  position: {
    type: String as PropType<UiAddPosition>,
    default: 'top-right',
  },
  orphan: {
    type: Boolean,
    default: false,
  },
  modelValueInitFrom: {
    type: String as PropType<'modelValue'|'layerGraphics'>,
    default: 'modelValue',
  },
}
export const createEventsBindProps = eventsCtx.createBindProps


export const emits = {
  load: (e: LoadEvent) => e,
  ...eventsCtx.emits,
}
export const createEventsOnEmits = eventsCtx.createOnEmits
