<script lang="ts">
import { defineComponent, watch } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
    },
  },
  setup (props) {
    console.log(props.name)
    watch(() => props.name, () => {
      console.log(props.name)
    })
    return {}
  },
})
</script>
<template>
  <div>111 {{ name }}</div>
</template>
