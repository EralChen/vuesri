<script lang="ts" setup>
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon1/MapServer'"
  >
    <VaPopupTemplate :title="'{OBJECTID}'">
      <template #default="{attributes}">
        {{ attributes }}
      </template>
    </VaPopupTemplate>
  </VaServerFeatureLayer>
</VaMapView>
</template>
