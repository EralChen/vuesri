<script lang="ts">
import { defineComponent } from 'vue'
import { useBasemap, useLayer } from '@vuesri/shared/use'
import { useAddLayer } from '@vuesri/components/layer/src/use'
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
