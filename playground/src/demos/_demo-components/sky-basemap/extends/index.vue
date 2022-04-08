<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { levelToScale, lods } from '@vuesri/shared/config/tile-info/4490'
import ZjBaseLayer from './ZjBaseLayer.vue'
import NbBaseLayer from './NbBaseLayer.vue'
const defaultOptions:__esri.MapViewProperties = {
  constraints: {
    // 设置切片层级 2 => 20
    lods: lods.slice(2) as unknown as __esri.LOD[],
  },
}
</script>
<template>
<VaMapView :default-options="defaultOptions">
  <!-- 天地图 层级 2 => 10 -->
  <VaSkyBasemap 
    :type="'vec_c'" 
    :min-scale="levelToScale[2]" 
    :max-scale="levelToScale[10]" 
    :spatial-reference="{ wkid: 4490 }"
  >
    <!-- 浙江wmts 11 => 18 -->
    <ZjBaseLayer
      :min-scale="levelToScale[11]" 
      :max-scale="levelToScale[18]"
    ></ZjBaseLayer>
     <!-- 宁波标注图层 wmts 11 => 20 -->
    <NbBaseLayer
      :min-scale="levelToScale[11]" 
      :max-scale="levelToScale[20]"
    ></NbBaseLayer>
  </VaSkyBasemap>
</VaMapView>
</template>
