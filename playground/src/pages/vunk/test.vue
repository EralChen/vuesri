<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const inputValue = ref('cx')
    return {
      inputValue,
    }
  },
})
</script>

<template>
  <input v-model="inputValue" />
</template>

<route>
{
  meta: {
    title: "Test"
  }
}
</route>