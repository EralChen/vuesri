<script lang="ts">
import { defineComponent } from 'vue'
import { VaSceneView } from '@vuesri/components/scene-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
export default defineComponent({
  components: {
    VaSceneView,
    VaSkyBasemap,
  },
})
</script>
<template>
  <VaSceneView>
    <VaSkyBasemap :type="'vec_w'" :spatial-reference="{ wkid: 3857 }"></VaSkyBasemap>
  </VaSceneView>
</template>
