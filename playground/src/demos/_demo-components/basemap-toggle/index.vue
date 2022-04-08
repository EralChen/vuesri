<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaBasemapToggle } from '@vuesri/components/basemap-toggle'
import TileLayer from 'esri/layers/TileLayer'
import Basemap from 'esri/Basemap'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
const defaultOptions:__esri.BasemapToggleProperties =  {
  nextBasemap: new Basemap({
    baseLayers,
    thumbnailUrl: 'https://www.tianditu.gov.cn/static/map/vec.jpg',
  }),
}
</script>
<template>
  <VaMapView>
    <VaSkyBasemap></VaSkyBasemap>
    <VaBasemapToggle :defaultOptions="defaultOptions"></VaBasemapToggle>
  </VaMapView>
</template>
