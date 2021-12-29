<script lang="ts">

import props from './props'
import { LoadEvent } from './types'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CxButton',
  emits: {
    load: (e: LoadEvent) => e,
  },
  props,
  setup (props, { emit }) {
    
    // core
    emit('load', { })
    return {}
  },
})
</script>
<template>
  <div>Button</div>
</template>
