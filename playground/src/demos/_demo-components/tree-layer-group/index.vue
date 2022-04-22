<script lang="ts" setup>
import { VaTreeLayerGroup, __VaTreeLayerGroup } from '@vuesri/components/tree-layer-group'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { ElTree } from 'element-plus'
import { VaTreeLayerItem } from '@vuesri/components/tree-layer-item'
import { VaViewUi } from '@vuesri/components/view-ui'
import { VaMapImageLayer } from '@vuesri/components/map-image-layer'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { VaTileLayer } from '@vuesri/components/tile-layer'
import { ref } from 'vue'
interface TreeNode extends __VaTreeLayerGroup.TreeNode {
  layer?: {
    type: string,
    if?: boolean,
    url: string,
    visible?: boolean
  },
  children?: TreeNode[]
}

const treeData = ref<TreeNode[]>([
  {
    label: '我的图层',
    children: [
      { 
        label: '宁波',
        children: [
          {
            label: '河流',
            layer: {
              type: 'MapImageLayer',
              url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon1/MapServer',
              
            },
          },

          {
            label: '森林',
            layer: {
              type: 'FeatureLayer',
              url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_polygon2/MapServer',
            },
          },
        ],
      },
      {
        label: '点位',
        layer: {
          type: 'FeatureLayer',
          url: 'http://116.63.63.191:6080/arcgis/rest/services/test_server/test_point2/MapServer',
        },
      },
    ],

  },
  {
    label: '他的图层',
    layer: {
      type: 'TileLayer',
      url: 'http://116.63.63.191:6080/arcgis/rest/services/SBWB/NB_DT3857/MapServer',
    },
  },
])
const checkChange = (data: TreeNode, checked: boolean) => {
  if (data.layer) {
    data.layer.if = true
    data.layer.visible = checked
  }
}
</script>
<template>
<VaMapView>
  <VaSkyBasemap :type="'img_w'" :spatial-reference="{wkid: 102100}"></VaSkyBasemap>
  <VaViewUi>
    <ElTree :data="treeData" show-checkbox @check-change="checkChange"></ElTree>
  </VaViewUi>

  <VaTreeLayerGroup :data="treeData">

    <VaTreeLayerItem :type="'MapImageLayer'">
      <template v-slot="{layer}">
        <VaMapImageLayer :url="layer.url" :visible="layer.visible" v-if="layer.if"></VaMapImageLayer>
      </template>
    </VaTreeLayerItem>

    <VaTreeLayerItem :type="'FeatureLayer'">
      <template v-slot="{layer}">
        <VaServerFeatureLayer :url="layer.url" :visible="layer.visible" v-if="layer.if"></VaServerFeatureLayer>
      </template>
    </VaTreeLayerItem>

    <VaTreeLayerItem :type="'TileLayer'">
      <template v-slot="{layer}">
        <VaTileLayer :url="layer.url" :visible="layer.visible" v-if="layer.if"></VaTileLayer>
      </template>
    </VaTreeLayerItem>

  </VaTreeLayerGroup>
</VaMapView>
</template>
