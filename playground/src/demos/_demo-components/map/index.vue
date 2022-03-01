<script lang="ts">
import { defineComponent } from 'vue'
import { VumaMap } from '@vuesium-mars3d/components/map'
import { VumViewer } from 'vuesium'

export default defineComponent({
  components: {
    VumaMap,
    VumViewer,
  },
  setup() {

    return {

    };
  },
});
</script>
<template>
  <div class="map-x">
    <VumViewer>
      <VumaMap></VumaMap>
    </VumViewer>
  </div>
</template>
<style>
.map-x {
  width: 100%;
  height: 500px;
}
</style>