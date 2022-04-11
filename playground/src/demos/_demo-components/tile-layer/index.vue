<script lang="ts" setup>
import { VaTileLayer, __VaTileLayer } from '@vuesri/components/tile-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
const layerLoad:__VaTileLayer.OnLoad = async (e) => {
  const view = e.view as __esri.MapView
  const layer = e.layer
  await layer.when()
  view.goTo(layer.fullExtent)
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'img_w'" :spatialReference="{
    wkid: 102100
  }"></VaSkyBasemap>
  <VaTileLayer :url="'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer'"
    @load="layerLoad"
  ></VaTileLayer>
</VaMapView>
</template>
