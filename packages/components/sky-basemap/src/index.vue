<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent } from 'vue'
import { VaBasemap } from '@vuesri/components/basemap'
export default defineComponent({
  name: 'VaSkyBasemap',
  components: {
    VaBasemap,
  },
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
  <VaBasemap>
    <slot></slot>
  </VaBasemap>
</template>
