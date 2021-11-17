<script lang="ts">
import { defineComponent, provide } from 'vue'
import { propsKey, contextKey } from './symbol'
export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number, Array],
      required: false,
    },
  },
  emits: {
    'update:model-value': (e: string | number | Array<string | number>) => true,
  },
  setup (props, context) {
    provide(propsKey, props)
    provide(contextKey, context)
    return {}
  },
})
</script>
<template>
  <div class="cx-tab-group">
    <slot></slot>
  </div>
</template>
