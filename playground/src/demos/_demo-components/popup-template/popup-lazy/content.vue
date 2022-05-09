<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const popupNode = ref()
const targetIsVisible = ref(false)

useIntersectionObserver(popupNode, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting
})

watch(targetIsVisible, (v) => {

  if (v) { // 当 当前组件 展示再视图中时候 执行一些操作
    // do sometings
    console.log('一个弹窗展示了')
  }

}, { immediate: true })

</script>
<template>
  <div ref="popupNode">
    12312
  </div>
</template>
