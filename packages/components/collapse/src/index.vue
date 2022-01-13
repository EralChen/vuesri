<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VkCollapse',
  emits: {
    'update:model-value': (e:boolean) => e || true,
  },
  props: {
    event: {
      type: String,
      default: 'click',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    return {}
  },
  methods: {
    toggle () {
      this.$emit('update:model-value', !this.modelValue)
    },
  },
})
</script>
<template>
  <div class="vk-collapse">
    <div class="vk-collapse-header-x" @[event]="toggle">
      <slot name="header" :toggle="toggle">header</slot>
    </div>
    <div class="vk-collapse-body-x" v-show="modelValue">
      <slot name="body">body</slot>
    </div>
  </div>
</template>
