<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useAddLayer, useSetLayerOptions } from '@vuesri/components/layer/src/use'
import { ProvideSubLayers } from '@vuesri/components/sublayer'
import TileLayer from 'esri/layers/TileLayer'
import { VaLayerWhen } from '@vuesri/components/layer-when'
export default defineComponent({
  name: 'VaTileLayer',
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
    const layer = new TileLayer({
      ...props.defaultOptions,
    })
    watchEffect(() => {
      layer.url = props.url
    })


    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)

    provide('vaLayer', layer)
    provide('vaTileLayer', layer)
    emit('load', { view, layer })

    return {}
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
