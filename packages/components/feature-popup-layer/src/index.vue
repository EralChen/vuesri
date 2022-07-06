<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent, nextTick, onUnmounted, ref, shallowRef, watch } from 'vue'
import { useLayer, useView } from '@vuesri/shared/use'
import { VaGeoViewUi } from '@vuesri/components/geo-view-ui'
import { sMitter } from '@vuesri/shared/symbol'
import { useMitterToggleHandler } from '@vuesri/shared/helper/mitter'
export default defineComponent({
  name: 'VaFeaturePopupLayer',
  inheritAttrs: false,
  components: {
    VaGeoViewUi,
  },
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const layer = useLayer() as __esri.FeatureLayer | __esri.GeoJSONLayer
    const MitterToggleHandler = useMitterToggleHandler(view[sMitter])

    // core
    const _visible = ref(true)
    const visible = computed(() => props.visible ?? _visible.value)
    const features = shallowRef<(__esri.Graphic & {uid?: number})[]>([])
    const setFeatures = async () => {
      const featureSet = await layer.queryFeatures({
        returnGeometry: true,
        outFields: ['*'],
        where: '1=1',
        ...props.query,
      })
      features.value = featureSet.features
      console.log(features.value[0])
      return featureSet
    }

    /* load */
    setFeatures().then(featureSet => {
      emit('load', {
        featureSet,
        view, 
        layer,
      })
    })
    /* load end */

    /* change */
    watch(() => ({...props.query}), () => {

      setFeatures().then(featureSet => {
        emit('change', {
          featureSet,
          view, 
          layer,
        })
      })

    })
    /* changed */
    
    /* watchScale */
    const watchScale = new MitterToggleHandler('watch:scale', ([v]) => {
      if (props.maxScale && v < props.maxScale) {
        _visible.value = false
        emit('update:visible', false)
      } else if (props.minScale && v >= props.minScale) {
        _visible.value = false
        emit('update:visible', false)
      } else {
        _visible.value = true
        emit('update:visible', true)
      }
    })
    watchScale.add()
    onUnmounted(() => {
      watchScale.remove()
    })
    /* watchScale end*/
    


    if (layer[sMitter]) {
      
      const LayerMitterToggleHandler = useMitterToggleHandler(layer[sMitter])

      /* source change */
      const sourceChage = new LayerMitterToggleHandler('change', async () => {
        features.value = []
        await nextTick()
        await setFeatures()
      })
      sourceChage.add()
      onUnmounted(() => {
        sourceChage.remove()
      })
      /* source change end */

    }

    return {
      visible,
      features,
      layer,
    }
  },
})
</script>
<template>

  <VaGeoViewUi
    v-for="(item, index) of features"
    :visible="visible"
    :geometry="item.geometry"
    v-bind="$attrs"
    :key="item.uid || index"
  >
      <slot 
        :attributes="item.attributes"
        :geometry="item.geometry"
      ></slot>
  </VaGeoViewUi>


</template>
