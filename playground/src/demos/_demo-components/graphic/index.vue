<script lang="ts" setup>
import { VaGraphic } from '@vuesri/components/graphic'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGraphic></VaGraphic>
</VaMapView>
</template>
