<script lang="ts" setup>
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
import { VaDerivedFeatureLayer, __VaDerivedFeatureLayer } from '@vuesri/components/derived-feature-layer'
import { ref, shallowReactive } from 'vue'

const layerClick: __VaDerivedFeatureLayer.OnClick = async (e) => {
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
const visible = ref(true)
const query = shallowReactive({
  where: '1=1',
} as __esri.QueryProperties)
// const query = ref({})

</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaServerFeatureLayer 
    :orphan="true"
    :cursor="'pointer'"
    :url="'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer'"
  >
    <VaDerivedFeatureLayer 
      :cursor="'pointer'" 
      :visible="visible" 
      :query="query" 
      :renderer="renderer"
      @click="layerClick"
    >
    </VaDerivedFeatureLayer>
  </VaServerFeatureLayer>
</VaMapView>
</template>
