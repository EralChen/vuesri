<script lang="ts" setup>
import { VkCollapse } from '@vunk/components/collapse'
import RightTriangle from './RightTriangle/index.vue'
defineProps({
  icon: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  hiddenBody: {
    type: Boolean,
    default: false,
  },
})
defineEmits({
  'update:model-value': (e: boolean) => typeof e === 'boolean',
})
</script>
<template>
  <VkCollapse  
   :modelValue="modelValue"
   @update:modelValue="$emit('update:model-value', $event)"
   class="admin-layout-nav-link-collapse-x" :hiddenBody="hiddenBody">

    <template #header>
      <RightTriangle 
        v-if="icon" 
        :class="{
          'is-active': modelValue
        }"
        :size="'1.2em'"
      ></RightTriangle>
      <slot name="header"></slot>

    </template>

    <template #body>
      <slot name="body"></slot>
    </template>

  </VkCollapse>
</template>
<style lang="scss">
.admin-layout-nav-link-collapse-x{
  .vk-collapse-header-x{
    display: flex;
    align-items: center;
  }
  .vk-svg-right-triangle{
    transition: transform .1s ease-in;
    &.is-active{
      transform: rotate(90deg);
    }
  }
}
</style>
