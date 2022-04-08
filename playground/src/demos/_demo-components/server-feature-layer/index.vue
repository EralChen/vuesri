<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer, __VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
const layerLoad:__VaServerFeatureLayer.OnLoad = async (e) => {
  const view = e.view as __esri.MapView
  await e.layer.when()
  view.goTo(e.layer.fullExtent)
}
const layerClick:__VaServerFeatureLayer.OnClick = async (e) => {
  const { result } = e
  if (result) {
    console.log(result)
  }
}
const renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 10,
    color: 'green',
  }),
})
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer 
    :renderer="renderer"
    :cursor="'pointer'"
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
    @load="layerLoad"
    @click="layerClick"
  >
  </VaServerFeatureLayer>
</VaMapView>
</template>
