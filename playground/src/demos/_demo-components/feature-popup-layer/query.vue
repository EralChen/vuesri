<script lang="ts" setup>
import { VaFeaturePopupLayer } from '@vuesri/components/feature-popup-layer'
import { VaMapView, __VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
import { VaServerFeatureLayer } from '@vuesri/components/server-feature-layer'
import { VaViewUi } from '@vuesri/components/view-ui'

import { levelToScale } from 'vuesri/shared/config/tile-info/4490'
import { computed, ref } from 'vue'
import Point from '@arcgis/core/geometry/Point'

const mapViewOptions: __esri.MapViewProperties = {
  constraints: {
    maxScale: levelToScale[18],
    minScale: levelToScale[10],
  },
}
const XM_URL = 'http://119.3.132.67:6080/arcgis/rest/services/QYZHZZ/ZZXM/MapServer/0'
const loadView: __VaMapView.OnLoad = ({ view }) => {
  view.center = new Point({
    longitude: 121.55984918763029,
    latitude: 29.871852778958928,
    spatialReference: {
      wkid: 4490,
    },
  })
  view.zoom = 11
}

const where = ref(`1=1`)
const timelineList = ref([
  {
    time: '2022-6',
    value: '2022-06-01',
    url: '',
  },
  {
    time: '2023-1',
    value: '2023-01-01',
    url: '',
  },
  {
    time: '2024-6',
    value: '2024-06-01',
    url: '',
  },
  {
    time: '2025-1',
    value: '2025-01-01',
    url: import.meta.env.VITE_BASE_MAP_URL + '/ZZDY/MapServer/12',
  },
])
const query = computed(() => {
  return {
    where: where.value,
  }
})
const change = (item: { time: string }) => {
  if (item) {
    where.value = `单元='临俞北整治单元' and kg_year < '${item.time}'`
  }
}




</script>
<template>
  <VaMapView :defaultOptions="mapViewOptions" @load="loadView">

    <VaSkyBasemap :type="'vec_c'" :anno="false"></VaSkyBasemap>



    <VaServerFeatureLayer :url="XM_URL" :definitionExpression="where" :defaultOptions="{
      outFields: ['*'],
    }" :index="98">

      <VaFeaturePopupLayer :query="query" class="project-map">
        <template #default="{ attributes }">
          <div class="project-map-name" @click="$emit('click', attributes)">
            <!-- <div class="name">{{ attributes.项目名称 }}</div> -->
            <div class="num">
              {{ attributes.项目序号 }}
            </div>
          </div>
        </template>
      </VaFeaturePopupLayer>



    </VaServerFeatureLayer>

    <VaViewUi :position="'top-right'">
      <div v-for="(item, index) in timelineList" :key="index">
        <div @click="change(item)">{{ item.time }}</div>
      </div>
    </VaViewUi>
    <router-view></router-view>

  </VaMapView>

</template>
<style>
.btn-s {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 7px;
  background: #032f304d;
  border: 1px solid var(--c-border-light);
  line-height: 1;
  /* border-radius: 2px; */
  backdrop-filter: blur(8px);
  color: var(--c-border-light);
  cursor: pointer;
  user-select: none;
}

.btn-s>*+* {
  margin-left: 5px;
}

.btn-s:hover,
.select-btn-s {
  background: var(--c-border-light-30);
  color: white;
}

.btn-s span {
  display: none;
}

.btn-s:hover span {
  display: initial;
}

.btn-icon {
  width: 20px;
  height: 20px;
}

.qlzy {
  width: 100px;
  height: 36px;
  background: rgba(30, 107, 86, 0.90);
  ;
  border: 1px solid #1E6B56;
  border-radius: 2px;
  text-align: center;
  color: white;
  margin-right: 30px;
  font-size: 16px;
}

.num {
  background: red;
  color: #fff;
  font-size: 24px;
}
</style>
