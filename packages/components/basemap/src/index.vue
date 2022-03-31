<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, inject } from 'vue'
import { useView } from '@vuesri/shared/use'
import Basemap from 'esri/Basemap'
export default defineComponent({
  name: 'VaBasemap',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const map = view.map
    // 如果basemap被vaBasemapToggle包裹, 则挂载到 toggle.nextBasemap 上
    const toggle = inject<__esri.BasemapToggle | null>('vaBasemapToggle', null)
    const basemap = new Basemap({
      baseLayers: props.baseLayers,
      spatialReference: props.spatialReference,
      thumbnailUrl: props.thumbnailUrl,
      ...props.defaultOptions,
    })
    if (toggle) {
      toggle.nextBasemap = basemap
    } else {
      map.basemap = basemap
    }
    
    emit('load', { view, basemap })
    return () => null
  },
})
</script>
