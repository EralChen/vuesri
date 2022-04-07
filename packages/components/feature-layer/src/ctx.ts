import { PropType } from 'vue'
import { emits as eventsEmits } from './events/ctx'
import { props as layerProps } from '@vuesri/shared/ctx/layer'
export const props = {
  ...layerProps,
  renderer: {
    type: Object as PropType<__esri.Renderer>,
    default: undefined,
  },
  definitionExpression: {
    type: String,
    default: '1=1',
  },
  popupEnabled: {
    type: Boolean,
    default: true,
  },
  defaultOptions: {
    type: Object as PropType<__esri.FeatureLayerProperties>,
    default: () => ({}),
  },
}


export const emits = {
  ...eventsEmits,
}
