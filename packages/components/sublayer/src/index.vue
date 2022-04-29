<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import Sublayer from 'esri/layers/support/Sublayer'
import { useSublayers } from '@vuesri/shared/use/instance/layers/useSublayers'
import { useAddLayer, useSetLayerOptions } from '@vuesri/components/layer/src/use'
import { useView } from '@vuesri/shared/use'

export default defineComponent({
  name: 'VaSublayer',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const sublayers = useSublayers()

    const sublayer = new Sublayer({
      ...props.defaultOptions,
    })
    watchEffect(() => {
      sublayer.id = props.id
    })
    watchEffect(() => {
      if (props.renderer === undefined) return
      sublayer.renderer = props.renderer
    })
 
    useSetLayerOptions(sublayer, props)
    useAddLayer(sublayers, sublayer, props)

    provide('vaSublayer', sublayer)
    provide('vaLayer', sublayer)
    emit('load', { view, sublayers, sublayer })

    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
