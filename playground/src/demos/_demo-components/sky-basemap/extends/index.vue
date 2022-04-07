<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaViewWhen } from '@vuesri/components/view-when'
import { levelToScale, lods } from '@vuesri/shared/config/tile-info/3857'
import ZjBaseLayer from './ZjBaseLayer.vue'
const defaultOptions:__esri.MapViewProperties = {
  constraints: {
    lods: lods.slice(2, 9) as any,
  },
}
</script>
<template>
<VaMapView :default-options="defaultOptions">
  <VaSkyBasemap 
    :type="'vec_w'" 
    :lods-level="[1, 8]" 
    :min-scale="levelToScale[2]" 
    :max-scale="levelToScale[8]"
    :spatial-reference="{ wkid: 102100 }"
  >
     <!-- VaViewWhen 的子节点会在 view.when()之后加载  -->
    <!-- <VaViewWhen>
      <ZjBaseLayer></ZjBaseLayer>
    </VaViewWhen> -->
  </VaSkyBasemap>
</VaMapView>
</template>
