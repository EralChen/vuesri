import { PropType } from 'vue'
import * as webTileLayerCtx from '@vuesri/components/web-tile-layer/src/ctx'
export const props = {
  ...webTileLayerCtx.props,
  type: {
    type: String as PropType<
      'img_c'|'vec_c'|'ter_c'|'img_w'|'vec_w'|'ter_w'|
      'cia_c'|'cva_c'|'cta_c'|'cia_w'|'cva_w'|'cta_w'
    >,
    default: 'img_c',
  },
  token: {
    type: String,
    default: 'f0175927031c1e12cb804b0c3b8cce4d',
  },
}

export const emits = {
  ...webTileLayerCtx.emits,
}