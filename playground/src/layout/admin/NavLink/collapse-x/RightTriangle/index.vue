<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: '1em',
  },
})
</script>
<template>
  <svg 
    viewBox="0 0 1024 1024" 
    version="1.1"
    xmlns="http://www.w3.org/2000/svg" 
    class="vk-svg-right-triangle"
  >
    <path d="M384.30607 256.204389l0 512.41186 320.259338-256.206443L384.30607 256.204389z"
      fill="currentColor"
    ></path>
  </svg>
</template>
<style>
.vk-svg-right-triangle{
  width: v-bind(size);
  height: v-bind(size);
}
</style>