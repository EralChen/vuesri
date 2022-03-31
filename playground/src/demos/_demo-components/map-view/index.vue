<script lang="ts">
import { defineComponent } from 'vue'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from 'vuesri'
import { Extent } from 'esri/geometry'
export default defineComponent({
  components: {
    VaMapView,
    VaSkyBasemap,
    // VaServerFeatureLayer,
  },
  setup () {
    const limitExtent = new Extent({
      xmax: 123.98391728462636,
      xmin: 119.05657804336931,
      ymax: 31.43764631047967,
      ymin: 28.694138937842112,
    })
    return {
      limitExtent,
    }
  },
})
</script>
<template>
  <VaMapView :limitExtent="limitExtent">
    <VaSkyBasemap></VaSkyBasemap>
    
  </VaMapView>
</template>
