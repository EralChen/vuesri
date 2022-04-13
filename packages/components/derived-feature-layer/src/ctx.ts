import { PropType } from 'vue'
import * as featureLayerCtx  from '@vuesri/components/feature-layer/src/ctx'
import * as clientFeatureLayerCtx from '@vuesri/components/client-feature-layer/src/ctx'
export const props = {
  ...featureLayerCtx.props,
  query: {
    type: Object as PropType<__esri.QueryProperties>,
    default: undefined,
  },
}
export const createFeatureLayerBindProps = featureLayerCtx.createBindProps


export const emits = {
  ...clientFeatureLayerCtx.emits,
}

export const createClientFeatureLayerOnEmits = clientFeatureLayerCtx.createOnEmits
