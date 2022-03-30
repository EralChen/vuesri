<script lang="ts">
import { defineComponent } from 'vue'
import { emits, props } from './ctx'
import { useMapView } from '@vuesri/shared/use'
import { sMitter } from '@vuesri/shared/symbol'

export default defineComponent({
  emits, props,
  setup () {
    const view = useMapView()
    const mitter = view[sMitter]
    
    // const map = view.map

    // 为view安装一个事件总线
    // const mitter = []
    // view[sMitter] = mitter
    // const mitter = view[sMitter]

    return {}
  },
})
</script>
<template>
  <div></div>
</template>
