<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaBasemap } from '@vuesri/components/basemap'
import TileLayer from 'esri/layers/TileLayer'
const baseLayers: __esri.LayerProperties[] = [
  new TileLayer({
    url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
  }),
]
</script>
<template>
<VaMapView>
  <VaBasemap :base-layers="baseLayers"></VaBasemap>
</VaMapView>
</template>
