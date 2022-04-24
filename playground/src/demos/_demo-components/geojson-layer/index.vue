<script lang="ts" setup>
import { VaGeojsonLayer, __VaGeojsonLayer } from '@vuesri/components/geojson-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import { VaFeaturePopupLayer } from '@vuesri/components/feature-popup-layer'
const url = import.meta.env.VITE_BASE_URL + '/data/cell.json'
const layerLoad:__VaGeojsonLayer.OnLoad = async (e) => {
  const view = e.view as __esri.MapView
  await e.layer.when()
  console.log(e.layer)
  view.goTo(e.layer.fullExtent)
}
const layerClick:__VaGeojsonLayer.OnClick = ({ result }) => {
  console.log(result)
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGeojsonLayer
    :cursor="'pointer'"
    :geometry-type="'polygon'"
    :url="url"
    @click="layerClick"
    @load="layerLoad"
  >
    <VaPopupTemplate>
      <template #default="{attributes}">
        {{ attributes }}
      </template>
    </VaPopupTemplate>
    <VaFeaturePopupLayer>
       <template #default="{attributes}">
        {{ attributes }}
      </template>
    </VaFeaturePopupLayer>
  </VaGeojsonLayer>
</VaMapView>
</template>
