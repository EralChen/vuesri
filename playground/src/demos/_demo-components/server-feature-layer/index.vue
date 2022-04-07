<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
export default defineComponent({
  components: {
    VaMapView,
    VaSkyBasemap,
    // VaServerFeatureLayer,
  },
  setup () {
    const type = ref<'img_c' | 'vec_c' | 'ter_c' | 'img_w' | 'vec_w' | 'ter_w'>('img_c')
    const anno = ref(false)
    return {
      type,
      anno,
    }
  },
})
</script>
<template>
<div>
  <button @click="type = type === 'vec_c' ? 'img_c': 'vec_c'">change</button>
  <button @click="anno = !anno">anno</button>
</div>
<VaMapView>

  <VaSkyBasemap :type="type" :anno="anno" :spatial-reference="{
    wkid: 4326
  }"></VaSkyBasemap>
  <!-- <VaServerFeatureLayer></VaServerFeatureLayer> -->
</VaMapView>
</template>
