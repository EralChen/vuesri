<script lang="ts">
import { props, emits } from './ctx'
import { computed, defineComponent } from 'vue'
import { VaBasemap } from '@vuesri/components/basemap'
import { VaTdtWebTileLayer } from '@vuesri/components/tdt-web-tile-layer'
import { VaBasemapBaseLayers } from '@vuesri/components/basemap-base-layers'
export default defineComponent({
  name: 'VaSkyBasemap',
  components: {
    VaBasemap,
    VaBasemapBaseLayers,
    VaTdtWebTileLayer,
  },
  emits,
  props,
  setup (props, { emit }) {
    const annoType = computed(() => {
      const baseTypeInfo = props.type.split('_')
      const baseLayer = baseTypeInfo[0] as 'img'|'vec'|'ter'
      const typeSR = baseTypeInfo[1] as 'w'|'c'
      const annoType = `c${baseLayer[0]}a_${typeSR}`
      return annoType as 'cia_c' | 'cva_c' | 'cta_c' | 'cia_w' | 'cva_w' | 'cta_w'
    })
    const thumbnailUrl = computed(() => {
      if (props.thumbnailUrl) {
        return props.thumbnailUrl
      }
      if (props.type.startsWith('vec')) {
        return 'http://lbs.tianditu.gov.cn/images/vec_c.png'
      }
      if (props.type.startsWith('img')) {
        return 'http://lbs.tianditu.gov.cn/images/img_c.png'
      }
      return ''
    })
    return {
      thumbnailUrl,
      annoType,
    }
  },
})
</script>
<template>
  <VaBasemap 
    :thumbnailUrl="thumbnailUrl"
  >
    <!-- layer -->
    <VaTdtWebTileLayer :type="type" :orphan="true" :spatialReference="spatialReference">
      <VaBasemapBaseLayers />
    </VaTdtWebTileLayer>
    <!-- anno -->
    <VaTdtWebTileLayer v-if="anno" :type="annoType" :orphan="true" :spatialReference="spatialReference">
      <VaBasemapBaseLayers />
    </VaTdtWebTileLayer>
    <slot></slot>
  </VaBasemap>
</template>
