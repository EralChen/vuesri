<script setup lang="ts">
import { computed, Ref, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
const props = defineProps({
  type: {
    type: String,
    default: 'vue',
  },
  source: {
    type: String,
    required: true,
  },
})
const sourceNode = ref() as Ref<HTMLDivElement>
const decoded = computed(() => {

  return decodeURIComponent(props.source)
})
const { copy, copied } = useClipboard({
  copiedDuring: 3 * 1000,
})
</script>

<template>
  <div sk-flex="row-end" class="mtb-xs">
    <el-button @click="copy(sourceNode.innerText)">{{copied ? 'copied' : 'copy'}}</el-button>
  </div>

  <div :class="'example-source language-' + type" v-html="decoded"
    ref="sourceNode"
  ></div>
</template>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>
