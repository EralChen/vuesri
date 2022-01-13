<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VkCollapse } from '@vunk/components/collapse'
export default defineComponent({
  components: {
    VkCollapse,
  },
  setup () {
    const show = ref(false)
    return {
      show,
    }
  },
})
</script>
<template>
  <VkCollapse v-model="show"></VkCollapse>
</template>
