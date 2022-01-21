<script lang="ts">
import { defineComponent, PropType, provide } from 'vue'
import { propsKey, contextKey } from './symbol'
export default defineComponent({
  name: 'VkTabGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean, Array, Object] as PropType<any>,
      required: false,
    },
  },
  emits: {
    'update:model-value': (e: any) => e || true,
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
