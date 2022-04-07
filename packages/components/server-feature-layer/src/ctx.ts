import { LoadEvent } from './types'
import * as featureLayerCtx from '@vuesri/components/feature-layer/src/ctx'
export const props = {
  ...featureLayerCtx.props,
  url: {
    type: String,
    default: '',
    require: true,
  },
}

export const emits = {
  ...featureLayerCtx.emits,
  load: (e: LoadEvent) => e,
}
