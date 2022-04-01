<script lang="ts" setup>
import { VaTileLayer } from '@vuesri/components/tile-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from 'vuesri'
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'img_w'" :spatialReference="{
    wkid: 102100
  }"></VaSkyBasemap>
  <VaTileLayer :url="'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer'"></VaTileLayer>
</VaMapView>
</template>
