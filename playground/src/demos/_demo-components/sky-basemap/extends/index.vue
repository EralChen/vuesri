<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { levelToScale, lods } from '@vuesri/shared/config/tile-info/4490'
import ZjBaseLayer from './ZjBaseLayer.vue'
import NbBaseLayer from './NbBaseLayer.vue'
const defaultOptions:__esri.MapViewProperties = {
  constraints: {
    // level 2 => 20
    lods: lods.slice(2) as unknown as __esri.LOD[],
  },
}
</script>
<template>
<VaMapView :default-options="defaultOptions">
  <VaSkyBasemap 
    :type="'vec_c'" 
    :min-scale="levelToScale[1]" 
    :max-scale="levelToScale[10]" 
    :spatial-reference="{ wkid: 4490 }"
  >
    <ZjBaseLayer
      :min-scale="levelToScale[11]" 
      :max-scale="levelToScale[18]"
    ></ZjBaseLayer>
    <NbBaseLayer
      :min-scale="levelToScale[11]" 
      :max-scale="levelToScale[20]"
    ></NbBaseLayer>
  </VaSkyBasemap>
</VaMapView>
</template>
