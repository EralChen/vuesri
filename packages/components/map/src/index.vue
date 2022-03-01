<script lang="ts">
import props from './props'
import { defineComponent, inject, provide, onUnmounted } from 'vue'
import { Map as MarsMap } from 'mars3d'
import { __VumViewer } from 'vuesium'
import { LoadEvent } from './types'
export default defineComponent({
  name: 'VumaMap',
  emits: {
    load: (e: LoadEvent) => e,
  },
  props,
  setup (props, { emit }) {
    const viewer = inject<__VumViewer.VumViewer>('vumViewer')
    if (!viewer) throw new TypeError('VumaMap must be in a ViewerComponents')
    const map = new MarsMap((viewer as any), {
      ...props.defaultOptions,
    })
    // core
    provide('vumaMap', map)
    emit('load', { 
      viewer,
      map,
    })
    onUnmounted(() => {
      map.destroy()
    })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
<style>
.vum-viewer-x{
  cursor: var(--map-cursor)!important;
}
</style>
