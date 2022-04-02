<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaTileLayer } from '@vuesri/components/tile-layer'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
</script>
<template>
  <VaMapView>
    
    <VaBasemap>

      <VaTileLayer :orphan="true" :url="'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer'">
        <VaBasemapBaseLayers></VaBasemapBaseLayers>
      </VaTileLayer>

    </VaBasemap>
    
  </VaMapView>
</template>
