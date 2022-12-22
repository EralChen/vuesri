<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
import ImageryTileLayer from 'esri/layers/ImageryTileLayer'
import { useAddLayer } from '@vuesri/components/layer/src/use'
import { useView } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaImageryTileLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    const layer = new ImageryTileLayer({
      ...props.defaultOptions,
    })
    useAddLayer(map, layer, props)
    emit('load', { 
      view,
      layer,
    })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
