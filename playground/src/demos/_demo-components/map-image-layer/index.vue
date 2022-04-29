<script lang="ts" setup>
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaMapImageLayer
     :url="'http://10.74.21.226:8000/i3fmbkompg/953e7858c1a7bc97c6a3d254c0074033540e727363695d1c3cd1f3e84a2ae5e08031223e28120de3c503334373252d33/services/JZWST/MapServer'"
  ></VaMapImageLayer>
</VaMapView>
</template>
