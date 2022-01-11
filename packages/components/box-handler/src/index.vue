<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VkBoxHandler',
  inheritAttrs: false,
})
</script>
<template>
  <div class="vk-box-handler-x">
    <div class="vk-box-handler" v-bind="$attrs">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.vk-box-handler-x{
  position: relative;
  width: 100%;
}
.vk-box-handler{
  cursor: pointer;
  position: absolute;
  top: 0;
  z-index: 2;
}
.vk-box-handler.r{
  right: 0;
}
.vk-box-handler.l{
  left: 0;
}
</style>
