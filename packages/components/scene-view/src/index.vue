<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, onMounted, provide, ref, StyleValue } from 'vue'
import SceneView from 'esri/views/SceneView'
import EsriMap from '@arcgis/core/Map'
import { sMitter } from '@vuesri/shared/symbol'
import mitt from 'mitt'
import { ViewEvents, ViewWatchs } from '@vuesri/components/view'
export default defineComponent({
  name: 'VaSceneView',
  components: {
    ViewEvents, ViewWatchs,
  },
  emits,
  props,
  setup (props, { emit }) {
    const viewNode = ref<HTMLDivElement>()
    // core
    const map = new EsriMap()
    const view = new SceneView({
      map,
      ...props.defaultOptions,
    })
    view[sMitter] = mitt() // 为 view 安装一个事件总线
    view.ui.components = []
    ;(window as any).__VA_SCENE_VIEW__ = view
        
    /* set cursor */
    const eventCursor = ref('')
    const cursorStyle = computed(() => ({
      '--va-map-view-cursor': props.cursor || eventCursor.value,
    }) as unknown as StyleValue)
    /* set cursor end */

    provide('vaView', view)
    provide('vaSceneView', view)

    onMounted(() => {
      view.container = viewNode.value as HTMLDivElement
      emit('load', { view })
    })

    return {
      viewNode,
      eventCursor,
      cursorStyle,
    }
  },
})
</script>
<template>
  <div
    ref="viewNode"
    :style="cursorStyle"
    class="va-scene-view va-view-x"
  >
    <ViewEvents
      v-model:cursor="eventCursor"
    ></ViewEvents>
    <ViewWatchs></ViewWatchs>
    <slot></slot>
  </div>
</template>
<style>
.va-scene-view{
  width: 100%;
  height: 100%;
  cursor: var(--va-scene-view-cursor);
}
</style>
