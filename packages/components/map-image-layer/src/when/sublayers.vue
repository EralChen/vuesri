<script lang="ts">
import { defineComponent, provide } from 'vue'
import { useLayer } from '@vuesri/shared/use'
export default defineComponent({
  setup () {
    const layer = useLayer() as __esri.MapImageLayer
    provide('vaSublayers', layer.sublayers)
    return {
    }
  },
})
</script>
<template>
  <slot></slot>
</template>
