<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, provide } from 'vue'
import { useAddLayer, useSetLayerOptions, useView } from '@vuesri/shared/use'
import WebTileLayer from 'esri/layers/WebTileLayer'
export default defineComponent({
  name: 'VaWebTileLayer',
  emits,
  props,
  setup (props, { emit, slots }) {
    const view = useView()
    const map = view.map
    // core
    const layer = new WebTileLayer({
      ...props.defaultOptions,
    })
    useSetLayerOptions(layer, props)
    useAddLayer(map, layer, props)
    provide('vaWebTileLayer', layer)
    provide('vaLayer', layer)
    emit('load', { view, layer })
    return () => slots.default?.()
  },
})
</script>
