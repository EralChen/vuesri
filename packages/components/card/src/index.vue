<script lang="ts">
import props from './props'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VkCard',
  props,
})
</script>
<template>
  <div class="vk-card-x">
    <component :is="tag" class="vk-card-title">
      <slot name="title"></slot>
    </component>
    <div class="vk-card-body">
       <slot></slot>
    </div>
  </div>
</template>
<style>
.vk-card-x{
  display: flex;
  flex-direction: column;
}
.vk-card-body{
  flex: 1;
}
</style>