<script lang="ts">
import { defineComponent } from 'vue'
import { useBasemap, useLayer, useAddLayer } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaBasemapBaseLayers',
  setup () {
    const basemap = useBasemap()
    const layer = useLayer()
    useAddLayer(basemap.baseLayers, layer, {})
    return () => null
  },
})
</script>
