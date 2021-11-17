<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CxButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <button>{{text}}</button>
</template>
