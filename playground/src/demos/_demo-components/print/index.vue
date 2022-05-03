<script lang="ts" setup>
import { VaPrint } from '@vuesri/components/print'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaPrint></VaPrint>
</VaMapView>
</template>
