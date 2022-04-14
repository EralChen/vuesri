<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onMounted, provide, ref } from 'vue'
import { useView } from '@vuesri/shared/use'
import { useAddUi } from './use'
export default defineComponent({
  name: 'VaViewUi',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()
    const viewUiNode = ref<HTMLDivElement>()

    // core
    const ready = ref(false)
    onMounted(() => {
      if (!viewUiNode.value) return
      useAddUi(view.ui, viewUiNode.value, props)
      ready.value = true
      provide('vaViewUi', viewUiNode.value)
      emit('load', { view, el: viewUiNode.value })
    })
    
    return {
      viewUiNode,
      ready,
    }
  },
})
</script>
<template>
  <div
    ref="viewUiNode"
    class="va-view-ui"
  >
    <slot v-if="ready"></slot>
  </div>
</template>
