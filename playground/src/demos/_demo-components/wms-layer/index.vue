<script lang="ts" setup>
import { VaWmsLayer } from '@vuesri/components/wms-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap :spatialReference="{
    wkid: 4490
  }"></VaSkyBasemap>
  <VaWmsLayer></VaWmsLayer>
</VaMapView>
</template>
