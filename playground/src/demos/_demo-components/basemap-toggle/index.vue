<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from 'vuesri'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaBasemapToggle } from '@vuesri/components/basemap-toggle'
import { VaBasemapToggleNextBasemap } from '@vuesri/components/basemap-toggle-next-basemap'
import TileLayer from 'esri/layers/TileLayer'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  
  <VaBasemapToggle>
    <VaBasemap :baseLayers="baseLayers" :orphan="true">
      <VaBasemapToggleNextBasemap
        :thumbnailUrl="'https://neimenggu.tianditu.gov.cn/static/map/vec.jpg'"
      ></VaBasemapToggleNextBasemap>
    </VaBasemap>
  </VaBasemapToggle>

</VaMapView>

</template>
