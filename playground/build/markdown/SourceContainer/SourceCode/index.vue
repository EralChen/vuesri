<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'vue'
  },
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {

  return decodeURIComponent(props.source)
})

</script>

<template>
  <div :class="'example-source language-' + type" v-html="decoded"></div>
</template>

<style scoped lang="scss">
.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>
