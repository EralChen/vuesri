<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaTileLayer } from '@vuesri/components/tile-layer'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
</script>
<template>
  <VaMapView>
    <VaBasemap>

      <VaTileLayer :orphan="true">
        <VaBasemapBaseLayers></VaBasemapBaseLayers>
      </VaTileLayer>

    </VaBasemap>
    
  </VaMapView>
</template>
