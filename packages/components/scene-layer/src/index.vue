<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { useAddLayer, useSetLayerOptions } from '@vuesri/components/layer/src/use'
import { useSceneView } from '@vuesri/shared/use'
import SceneLayer from 'esri/layers/SceneLayer'

export default defineComponent({
  name: 'VaSceneLayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useSceneView()
    const map = view.map
    const layer = new SceneLayer({
      url: props.url,
      ...props.defaultOptions,
    })

    watchEffect(() => {
      layer.url = props.url
    })

    useAddLayer(map, layer, props)
    useSetLayerOptions(layer, props)

    provide('vaSceneLayer', layer)
    provide('vaLayer', layer)
    emit('load', { 
      layer,
      view,
    })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
