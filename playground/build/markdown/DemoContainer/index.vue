<script lang="ts">
import { defineComponent, ref } from 'vue'
import demos from '@/demos'
import SourceContainer from '../SourceContainer/index.vue'
export default defineComponent({
  components: {
    SourceContainer,
  },
  props: {
    source: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    rawSource: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  async setup (props) {
    const codeShow = ref(false)
    const c = (await demos[`./${props.path}`]()).default
    return {
      codeShow,
      c,
    }
  },
})
</script>
<template>
  <div class="demo-x">
    <div class="demo-component-x">
      <Component :is="c"></Component>
    </div>

    <SourceContainer :description="description" :raw-source="rawSource"
      :path="path" :source="source"
    ></SourceContainer>
  </div>
</template>
<style>
.demo-component-x{
  border: 2px solid var(--c-border);
  padding: 16px;
  margin: 8px;
  border-radius: 4px;
}
</style>
