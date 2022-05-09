<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer, __VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
import { VaPopupTemplate } from '@vuesri/components/popup-template'
import Content from './content.vue'

const layerLoad:__VaServerFeatureLayer.OnLoad = async (e) => {
  const view = e.view as __esri.MapView
  await e.layer.when()
  view.goTo(e.layer.fullExtent)
}

const renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 10,
    color: 'green',
  }),
})

const featureReduction = {
  type: 'cluster',
  popupTemplate: {

  },
  popupEnabled: true,
} as __esri.FeatureLayerProperties['featureReduction']

</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer 
    :defaultOptions="{
      featureReduction,
    }"
    :renderer="renderer"
    :cursor="'pointer'"
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
    @load="layerLoad"
  >
    <VaPopupTemplate>
      <Content></Content>
    </VaPopupTemplate>
  </VaServerFeatureLayer>
</VaMapView>
</template>
