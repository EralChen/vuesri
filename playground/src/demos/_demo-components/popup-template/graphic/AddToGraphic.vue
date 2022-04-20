<script lang="ts">
import { useGraphic, usePopupTemplate } from '@vuesri/shared/use'
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  setup () {
    const graphic = useGraphic()
    const popupTemplate = usePopupTemplate()
    const o = graphic.popupTemplate
    graphic.popupTemplate = popupTemplate
    onUnmounted(() => {
      graphic.popupTemplate = o
    })
    return () => null
  },
})
</script>
