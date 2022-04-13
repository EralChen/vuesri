<script lang="ts">
import { defineComponent } from 'vue'
import { emits } from './ctx'
import EView from './view/index.vue'
export default defineComponent({
  emits,
  components: {
    EView,
  },
})
</script>
<template>
  <EView 
    @click="$emit('click', $event)"
    @pointer-move="$emit('pointerMove', $event)"
  ></EView>
</template>
