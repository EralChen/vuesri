<script lang="ts" setup>
import { VaGraphicsLayer, __VaGraphicsLayer } from '@vuesri/components/graphics-layer'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { Polygon } from 'esri/geometry'
import Graphic from 'esri/Graphic'
import { SimpleFillSymbol } from 'esri/symbols'
const graphics = [
  new Graphic({
    geometry: new Polygon({
      rings: [
        [
          [120, 30],
          [121, 30],
          [121, 31],
          [120, 30],
        ],
      ],
    }),
    symbol: new SimpleFillSymbol({
      color: 'red',
    }),
  }),
]
const layerload:__VaGraphicsLayer.OnLoad = async (e) => {
  const view = e.view as __esri.MapView
  await e.layer.when()
  view.goTo(e.layer.graphics)
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <VaGraphicsLayer :graphics="graphics" @load="layerload"></VaGraphicsLayer>
</VaMapView>
</template>
