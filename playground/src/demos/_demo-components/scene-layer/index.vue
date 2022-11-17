<script lang="ts" setup>
import { VaSceneLayer, __VaSceneLayer } from '@vuesri/components/scene-layer'
import { VaSceneView } from '@vuesri/components/scene-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
const layerLoad:__VaSceneLayer.OnLoad = async ({
  layer,
  view,
}) => {
  await layer.when()
  view.goTo(layer.fullExtent)
}
</script>
<template>
<VaSceneView>
  <VaSkyBasemap :type="'vec_w'" :spatialReference="{
    wkid: 3857
  }"></VaSkyBasemap>

  <VaSceneLayer
    :url="'http://116.63.63.191:6080/geoscene/rest/services/Hosted/zh_jzw_test/SceneServer'"
    @load="layerLoad"
  ></VaSceneLayer>
</VaSceneView>
</template>
