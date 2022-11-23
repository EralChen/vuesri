<script lang="ts" setup>
import { VaGeoViewUi } from '@vuesri/components/geo-view-ui'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { Point } from 'esri/geometry'
const point = new Point({
  longitude: 120,
  latitude: 30,
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'vec_c'"></VaSkyBasemap>
  <VaGeoViewUi :geometry="point" class="abc">
    name
  </VaGeoViewUi>
</VaMapView>
</template>
