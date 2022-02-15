<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '_c/SvgIcon/index.vue'
import HelloWorld from './hello-world/index.md'
export default defineComponent({
  components: {
    SvgIcon,
    HelloWorld,
  },
  setup () {
    return {}
  },
})
</script>
<template>
  <SvgIcon :iconClass="'home-indicator'"></SvgIcon>
  <HelloWorld></HelloWorld>
</template>
<style>
.icon-home-indicator{
  color: var(--c-info);
  font-size: 2em;
}
</style>
