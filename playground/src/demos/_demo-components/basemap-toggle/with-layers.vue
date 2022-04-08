<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaTileLayer } from '@vuesri/components/tile-layer'
import { VaBasemapToggle } from '@vuesri/components/basemap-toggle'
import { VaBasemapToggleNextBasemap } from '@vuesri/components/basemap-toggle-next-basemap'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  
  <VaBasemapToggle>
    <!-- 设置Basemap为orphan -->
    <VaBasemap :orphan="true" :thumbnailUrl="'https://neimenggu.tianditu.gov.cn/static/map/vec.jpg'">
      <!-- 使用图层自定义basemap -->
      <VaTileLayer :orphan="true" :url="'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer'">
        <VaBasemapBaseLayers></VaBasemapBaseLayers>
      </VaTileLayer>
      <!-- 使用VaBasemapToggleNextBasemap将basemap插入到nextBasemap -->
      <VaBasemapToggleNextBasemap></VaBasemapToggleNextBasemap>
    </VaBasemap>
  </VaBasemapToggle>

</VaMapView>

</template>
