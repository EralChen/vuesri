<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import MapImageLayer from 'esri/layers/MapImageLayer'
import { useSetLayerOptions, useAddLayer } from '@vuesri/components/layer/src/use'
import { VaLayerWhen } from '@vuesri/components/layer-when'
import ProvideSubLayers from './when/sublayers.vue'
export default defineComponent({
  name: 'VaMapImageLayer',
  components: {
    VaLayerWhen,
    ProvideSubLayers,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    // core
    const layer = new MapImageLayer({ ...props.defaultOptions })
    watchEffect(() => {
      layer.url = props.url
    })
    watchEffect(() => {
      if (!props.sublayers) return
      layer.sublayers = props.sublayers as unknown as __esri.Collection<__esri.Sublayer>
    })

    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)
    provide('vaLayer', layer)
    provide('vaMapImageLayer', layer)
    
   
    emit('load', { view, layer })
    return {
    }
  },
})
</script>
<template>
  <slot></slot>
  <VaLayerWhen>
    <ProvideSubLayers>
      <slot name="when"></slot>
    </ProvideSubLayers>
  </VaLayerWhen>
</template>
