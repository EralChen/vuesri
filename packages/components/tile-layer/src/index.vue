<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useAddLayer, useSetLayerOptions } from '@vuesri/components/layer/src/use'
import TileLayer from 'esri/layers/TileLayer'
export default defineComponent({
  name: 'VaTileLayer',
  emits,
  props,
  setup (props, { emit, slots }) {
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

    return () => slots.default?.()
  },
})
</script>

