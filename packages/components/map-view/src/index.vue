<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, StyleValue } from 'vue'
import MapView from '@arcgis/core/views/MapView'
import AMap from '@arcgis/core/Map'
import Events from './events/index.vue'
import Watchs from './watchs/index.vue'
import { sMitter } from '@vuesri/shared/symbol'
import mitt from 'mitt'
import { props, emits } from './ctx'
export default defineComponent({
  name: 'VaMapView',
  components: {
    Events, Watchs,
  },
  emits,
  props,
  setup (props, { emit }) {
    const viewNode = ref<HTMLDivElement>()
    // init
    const map = new AMap()
    const view:__esri.MapView = new MapView({
      map: map,
      ...props.defaultOptions,
    })
    view[sMitter] = mitt() // 为 view 安装一个事件总线
    view.ui.components = []

    // set cursor
    const eventCursor = ref('')
    const cursorStyle = computed(() => ({
      '--va-map-view-cursor': props.cursor || eventCursor.value,
    }) as unknown as StyleValue)

    // provide
    provide('vaView', view)
    provide('vaMapView', view)

    onMounted(() => {
      view.container = viewNode.value as HTMLDivElement
      emit('load', { view })
    })

    return {
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
    class="va-map-view va-view-x"
  >
    <Events
      v-model:cursor="eventCursor"
      :limit-extent="limitExtent"
    ></Events>
    <Watchs></Watchs>
    <slot></slot>
  </div>
</template>

<style>
.va-map-view{
  width: 100%;
  height: 100%;
  cursor: var(--va-map-view-cursor);
}
</style>
