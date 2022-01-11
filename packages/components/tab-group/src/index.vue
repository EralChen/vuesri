<script lang="ts">
import { defineComponent, provide } from 'vue'
import { propsKey, contextKey } from './symbol'
export default defineComponent({
  name: 'VkTabGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array],
      required: false,
    },
  },
  emits: {
    'update:model-value': (e: string | number | boolean | Array<string | number>) => e || true,
  },
  setup (props, context) {
    provide(propsKey, props)
    provide(contextKey, context)
    return {}
  },
})
</script>
<template>
  <div class="vk-tab-group">
    <slot></slot>
  </div>
</template>
