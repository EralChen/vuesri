<script lang="ts" setup>
import { VaTdtWebTileLayer } from '@vuesri/components/tdt-web-tile-layer'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaMapView } from '@vuesri/components/map-view'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
</script>
<template>
<VaMapView>
  <VaBasemap>
    <VaTdtWebTileLayer :type="'img_c'" :orphan="true">
      <VaBasemapBaseLayers />
    </VaTdtWebTileLayer>


    <VaTdtWebTileLayer :type="'cia_c'" :orphan="true">
      <VaBasemapBaseLayers />
    </VaTdtWebTileLayer>

  </VaBasemap>
</VaMapView>
</template>
