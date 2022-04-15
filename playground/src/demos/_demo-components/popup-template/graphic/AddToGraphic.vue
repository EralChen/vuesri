<script lang="ts" setup>
import { useGraphic, usePopupTemplate } from '@vuesri/shared/use'
import { onUnmounted } from 'vue'
const graphic = useGraphic()
const popupTemplate = usePopupTemplate()
const o = graphic.popupTemplate
graphic.popupTemplate = popupTemplate
onUnmounted(() => {
  graphic.popupTemplate = o
})
</script>
