<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useBasemap, useBasemapToggle } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaBasemapToggleNextBasemap',
  setup () {
    const basemap = useBasemap()
    const toggle = useBasemapToggle()
    const originNext = toggle.nextBasemap
    toggle.nextBasemap = basemap
    onUnmounted(() => {
      toggle.nextBasemap === basemap && (toggle.nextBasemap = originNext)
    })
    return () => null
  },
})
</script>

