<script lang="ts">
import { defineComponent } from 'vue'
import EMapView from './map-view/index.vue'
import ESceneView from './scene-view/index.vue'
import { emits } from './ctx'
export default defineComponent({
  emits,
  components: {
    EMapView,
    ESceneView,
  },
})
</script>
<template>
  <EMapView 
    @click="$emit('click', $event)"
    @pointer-move="$emit('pointerMove', $event)"
  ></EMapView>
  <ESceneView></ESceneView>
</template>
