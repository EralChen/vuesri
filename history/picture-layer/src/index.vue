<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
import { PictureLayer } from './PictureLayer'
import { useAddLayer } from '@vuesri/components/layer/src/use'
import { useView } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaPictureLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    // core
    const layer = new PictureLayer({
      url: props.url,
      extent: props.extent as __esri.Extent,
      units: props.units,
      ...props.defaultOptions,
    })
    console.log(layer)
    useAddLayer(map, layer, props)
    emit('load', { })
    return {}
  },
})
</script>
<template> 
  <slot></slot>
</template>
