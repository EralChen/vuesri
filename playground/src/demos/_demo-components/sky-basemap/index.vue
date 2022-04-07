<script lang="ts" setup>
import { ref } from 'vue'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
const type = ref<'img_c' | 'vec_c' | 'ter_c' | 'img_w' | 'vec_w' | 'ter_w'>('img_c')
const anno = ref(false)
</script>
<template>
<div>
  <button @click="type = type === 'vec_c' ? 'img_c': 'vec_c'">change</button>
  <button @click="anno = !anno">anno</button>
</div>
<VaMapView>
  <VaSkyBasemap :type="type" :anno="anno" :spatial-reference="{
    wkid: 4326
  }"></VaSkyBasemap>
</VaMapView>
</template>
