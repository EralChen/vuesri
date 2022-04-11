<script lang="ts" setup>
import { VaClientFeatureLayer, __VaClientFeatureLayer } from '@vuesri/components/client-feature-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import request from '@/api/_request/arcgis'
import type { FeatureCollection, Point as GPoint } from 'geojson'
import { shallowRef } from 'vue'
import Graphic from 'esri/Graphic'
import { Point } from 'esri/geometry'
import { SimpleRenderer } from 'esri/renderers'
import { SimpleMarkerSymbol } from 'esri/symbols'
const getTestData = () => {
  return request<FeatureCollection<GPoint, {
    OBJECTID: number,
    ID: string
  }>>({
    baseURL: 'http://116.63.63.191:6080/arcgis/rest/services/test_server',
    url: '/test_point1/MapServer/0/query',
    method: 'GET',
  })
}
const renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 20,
    color: 'green',
  }),
})
/* init source */
const source = shallowRef<__esri.Graphic[]>([])
getTestData().then(res => {
  source.value = res.features.map(item => {
    return new Graphic({
      geometry: new Point({
        longitude: item.geometry.coordinates[0],
        latitude: item.geometry.coordinates[1],
      }),
      attributes: item.properties,
    })
  })
})
/* init source end */
const layerClick:__VaClientFeatureLayer.OnClick = (e) => {
  const { result } = e
  if (result) {
    console.log(result)
  }
}

</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaClientFeatureLayer 
    :renderer="renderer"
    :source="source" 
    :fields="[
      { name: 'OBJECTID', type: 'oid' },
      { name: 'ID', type: 'string' }
    ]" 
    :geometry-type="'point'" 
    :object-id-field="'OBJECTID'"
    :cursor="'pointer'"
    @click="layerClick"
  ></VaClientFeatureLayer>
</VaMapView>
</template>
