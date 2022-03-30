<script lang="ts">
import { defineComponent } from 'vue'
import { VaMapView, VaSkyBasemap } from 'vuesri'
export default defineComponent({
  components: {
    VaMapView,
    VaSkyBasemap,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <VaMapView>
    <VaSkyBasemap></VaSkyBasemap>
  </VaMapView>
</template>
