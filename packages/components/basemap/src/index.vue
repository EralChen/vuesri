<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onUnmounted, watchEffect } from 'vue'
import { useView } from '@vuesri/shared/use'
import Basemap from 'esri/Basemap'
export default defineComponent({
  name: 'VaBasemap',
  emits,
  props,
  setup (props, { emit }) {
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
    watchEffect(() => {
      basemap.thumbnailUrl = props.thumbnailUrl
    })

    !props.custom && (map.basemap = basemap)
    onUnmounted(() => { //还原basemap
      map.basemap === basemap && (map.basemap = originBasemap)
    })

    emit('load', { view, basemap })
    return () => null
  },
})
</script>
