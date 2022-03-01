<script lang="ts" setup>
import { onActivated, onMounted, ref, onDeactivated } from 'vue'
import { debounce } from 'vunk'
const keepScrollXNode = ref<HTMLDivElement|null>(null)
const scrollTop = ref(0)
const saveScrollTop = debounce(function () {
  if (keepScrollXNode.value) {
    scrollTop.value = keepScrollXNode.value.scrollTop
  }
})
const putScrollTop = () => {
  if (keepScrollXNode.value) {
    keepScrollXNode.value.scrollTop = scrollTop.value
  }
}
    
onMounted(() => {
  saveScrollTop()
})

onActivated(() => {
  putScrollTop()
})
</script>
<template>
<div class="keep-scroll-bfc">


  <div class="keep-scroll-x" ref="keepScrollXNode" @scroll="saveScrollTop">
    <slot></slot>
  </div>
</div>
</template>
<style>
.keep-scroll-bfc{
  height: 100%;
  overflow: hidden;
}
.keep-scroll-x{
  height: 100%;
  overflow: auto;
}
</style>
