// use <? ?> in .md to instert the string
import layerProps from './src/pages/docs/components/layers/layerProps.txt'
export default {
  propsRows: {
    visible: '|:visible|Boolean|true|show|',
  },
  layerProps,
} as Record<
  string, 
  string | Record<string, string>
>