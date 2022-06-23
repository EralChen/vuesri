<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, onUnmounted, ref, shallowRef, watch } from 'vue'
import { VaViewUi } from '@vuesri/components/view-ui'
import { useView } from '@vuesri/shared/use'
import { sMitter } from '@vuesri/shared/symbol'
import { useMitterToggleHandler } from '@vuesri/shared/helper/mitter'

export default defineComponent({
  name: 'VaGeoViewUi',
  components: {
    VaViewUi,
  },
  emits,
  props,
  setup (props) {
    const view = useView() as (__esri.MapView | __esri.SceneView)
    const mitter = view[sMitter]
    const MitterToggleHandler = useMitterToggleHandler(mitter)
    /* data init */
    const centerActions: Record<__esri.Geometry['type'], (g: __esri.Geometry) => __esri.Point> = {
      point (geo: __esri.Point)  {
        return geo
      },
      extent (geo: __esri.Extent) {
        return geo.center
      },
      mesh (geo: __esri.Mesh) {
        return geo.extent.center
      },
      multipoint (geo: __esri.Multipoint) {
        return geo.extent.center
      },
      polygon (geo: __esri.Polygon) {
        return geo.extent.center
      },
      polyline (geo: __esri.Polyline) {
        return geo.extent.center
      },
    } 
    const center = computed<__esri.Point|undefined>(() => {
      return props.geometry?.type && centerActions[props.geometry.type](props.geometry)
    })
    /* data init end */

    /* ScreenPoint end */
    const _visiable = ref(true)
    const screenPoint = shallowRef<__esri.MapViewScreenPoint>()
    const setScreenPoint = () => {
      let p: __esri.MapViewScreenPoint = center.value ? view.toScreen(center.value) :  {
        x: 0,
        y: 0,
      }
      screenPoint.value = p
    }
    setScreenPoint()
    /* ScreenPoint  end */

    /* watch extent */
    const wathExtent = new MitterToggleHandler('watch:extent', ([v]) => {
      if (!props.visible) return
      if (!center.value) return
      if (!v.contains(center.value)) { 
        return _visiable.value = false
      }
      setScreenPoint()
      _visiable.value = true
    })
    wathExtent.add()
    onUnmounted(() => {
      wathExtent.remove()
    })
    watch(() => center.value, () => {
      setScreenPoint()
    })
    /* watch extent end */

    // 如果外层传 true 则根据 _visiable ， 如果外层传 false 则是 false
    const visible = computed(() => props.visible ? _visiable.value : false)

    return {
      screenPoint,
      visible,
    }
  },
})
</script>
<template>
  <VaViewUi v-show="visible" class="va-geo-view-ui" :style="{
    left: screenPoint?.x + 'px',
    top: screenPoint?.y + 'px'
  }">
    <slot></slot>
  </VaViewUi>
</template>
<style>
.va-geo-view-ui{
  transform: translateZ(0);
}
</style>