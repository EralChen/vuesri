<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VaBasemapBaseLayers',
  emits,
  props,
  setup (props, { emit }) {
    // core
    emit('load', { })
    return {}
  },
})
</script>
<template>
  <div>BasemapBaseLayers</div>
</template>
