<script lang="ts">
import { emits } from './ctx'
import { defineComponent, ref } from 'vue'
import { useView } from '@vuesri/shared/use'
export default defineComponent({
  name: 'VaViewWhen',
  emits,
  setup (props, { emit }) {
    const view = useView()
    
    // core
    const ready = ref(false)
    view.when().then(() => {
      ready.value = true
      emit('load', { view })
    })

    return {
      ready,
      view,
    }
  },
})
</script>
<template>
  <slot
    v-if="ready"
    :view="view"
    :spatialReference="view.spatialReference"
  ></slot>
</template>
