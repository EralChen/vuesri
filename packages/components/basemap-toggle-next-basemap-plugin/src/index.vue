<script lang="ts">
import { defineComponent, onUnmounted, watchEffect } from 'vue'
import { useBasemap, useBasemapToggle } from '@vuesri/shared/use'
import { props } from './ctx'
export default defineComponent({
  props: props,
  name: 'VaBasemapToggleNextBasemapPlugin',
  setup (props) {
    const basemap = useBasemap()
    const toggle = useBasemapToggle()
    const originNext = toggle.nextBasemap
    watchEffect(() => {
      basemap.thumbnailUrl = props.thumbnailUrl
    })
    toggle.nextBasemap = basemap
    onUnmounted(() => {
      toggle.nextBasemap === basemap && (toggle.nextBasemap = originNext)
    })
    return () => null
  },
})
</script>

