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
    headerClass: {
      type: [String, Object],
      default: '',
    },
    bodyClass: {
      type: [String, Object],
      default: '',
    },
    hiddenBody: {
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
    <div class="vk-collapse-header-x" :class="headerClass" @[event]="toggle">
      <slot name="header" :toggle="toggle"></slot>
    </div>
    <div class="vk-collapse-body-x" v-if="!hiddenBody" :class="bodyClass" v-show="modelValue">
      <slot name="body"></slot>
    </div>
  </div>
</template>
