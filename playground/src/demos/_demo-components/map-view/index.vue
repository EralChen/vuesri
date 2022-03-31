<script lang="ts">
import { defineComponent } from 'vue'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from 'vuesri'
export default defineComponent({
  components: {
    VaMapView,
    VaSkyBasemap,
    // VaServerFeatureLayer,
  },
  setup () {
    return {
    }
  },
})
</script>
<template>
  <VaMapView>
    <VaSkyBasemap></VaSkyBasemap>
    
  </VaMapView>
</template>
