// use <? ?> in .md to instert the string
import layerProps from './src/pages/docs/components/layers/layerProps.txt'
import featureLayerProps from './src/pages/docs/components/layers/feature-layer/featureLayerProps.txt'
export default {
  layerProps,
  featureLayerProps,
} as Record<
  string, 
  string | Record<string, string>
>