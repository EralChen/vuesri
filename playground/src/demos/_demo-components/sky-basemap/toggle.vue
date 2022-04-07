<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaBasemapToggle } from '@vuesri/components/basemap-toggle'
import { VaBasemapToggleNextBasemap } from '@vuesri/components/basemap-toggle-next-basemap'
</script>
<template>
<VaMapView>

  <VaSkyBasemap :type="'img_c'"></VaSkyBasemap>

  <VaBasemapToggle>
    <VaSkyBasemap :type="'vec_c'" :orphan="true">
      <VaBasemapToggleNextBasemap></VaBasemapToggleNextBasemap>
    </VaSkyBasemap>
  </VaBasemapToggle>

</VaMapView>
</template>
