<script lang="ts">
import { emits } from './ctx'
import { defineComponent, ref } from 'vue'
import { useLayer, useView } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaLayerWhen',
  emits,
  setup (props, { emit }) {
    const view = useView()
    const layer = useLayer()
    // core
    const ready = ref(false)

    layer.when().then(() => {
      ready.value = true
      emit('load', { view, layer })
    })
    return {
      ready,
      view,
      layer,
    }
  },
})
</script>
<template>
  <slot
    v-if="ready"
    :view="view"
    :layer="layer"
  ></slot>
</template>
