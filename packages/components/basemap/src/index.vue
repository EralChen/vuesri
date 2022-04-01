<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onUnmounted, provide, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import Basemap from 'esri/Basemap'
export default defineComponent({
  name: 'VaBasemap',
  emits,
  props,
  setup (props, { emit, slots }) {
    const view = useView()
    const map = view.map
    const originBasemap = map.basemap

    const basemap = new Basemap({
      ...props.defaultOptions,
    })

    watchEffect(() => {
      basemap.baseLayers = props.baseLayers as __esri.Collection<__esri.Layer>
    })
    watchEffect(() => {
      basemap.spatialReference = (props.spatialReference || view.spatialReference) as __esri.SpatialReference
    })

    !props.orphan && (map.basemap = basemap)
    onUnmounted(() => { //还原basemap
      map.basemap === basemap && (map.basemap = originBasemap)
    })

    provide('vaBasemap', basemap)
    emit('load', { view, basemap })
    return () => slots.default?.()
  },
})
</script>
