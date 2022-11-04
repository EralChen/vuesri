<script lang="ts">
import { defineComponent } from 'vue'
import { VaSceneView, __VaSceneView } from '@vuesri/components/scene-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'

export default defineComponent({
  components: {
    VaSceneView,
    VaSkyBasemap,
  },
  setup () {
    const viewOptions:__esri.SceneViewProperties = {
      
      environment: {
        atmosphereEnabled: false,
        starsEnabled: false,
        background: {
          type: 'color',
          color: [0, 0, 0, 0],

        },
      },
      alphaCompositingEnabled: true,
    }
    
    return {
      viewOptions,
    }
  },
})
</script>
<template>
  <VaSceneView :defaultOptions="viewOptions">
    <VaSkyBasemap :type="'vec_w'" :spatial-reference="{ wkid: 3857 }"></VaSkyBasemap>
  </VaSceneView>
</template>
