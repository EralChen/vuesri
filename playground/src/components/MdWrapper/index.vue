<script lang="ts">
import { defineComponent } from 'vue'
import KeepScroll from '_c/KeepScroll/index.vue'
export default defineComponent({
  props: {
    frontmatter: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    KeepScroll
  },
  setup () {
    return {}
  }
})
</script>
<template>
  <KeepScroll>
    <slot></slot>
  </KeepScroll>
</template>
