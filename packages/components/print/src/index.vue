<script lang="ts">
import { props, emits } from './ctx'
import { defineComponent, onMounted, onUnmounted, provide, ref } from 'vue'
import { useView } from '@vuesri/shared/use'
import Print from 'esri/widgets/Print'
import { useAddUi } from '@vuesri/components/view-ui/src/use'
export default defineComponent({
  name: 'VaPrint',
  emits,
  props,
  setup (props, { emit }) {
    const view = useView()

    const uiNode = ref()
    const ready = ref(false)

    // core
    onMounted(() => {
      
      const print = new Print({
        container: uiNode.value,
        view,
        ...props.defaultOptions,
      })

      useAddUi(view.ui, print, props)
      provide('vaSketch', print)

      ready.value = true

      emit('load', { print, view })

      onUnmounted(() => {
        print.destroy()
      })

    })


    return {
      uiNode,
      ready,
    }
  },
})
</script>
<template>
  <div
    ref="uiNode"
    class="va-print-x"
  >
    <template v-if="ready">
      <slot></slot>
    </template>
  </div>
</template>
