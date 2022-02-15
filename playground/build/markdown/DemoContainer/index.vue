<script lang="ts">
import { defineComponent, ref } from 'vue'
import SourceCode from './SourceCode/index.vue'
import { VkCollapse } from '@vunk/components/collapse'
import demos from '@/demos'
export default defineComponent({
  components: {
    SourceCode,
    VkCollapse,
  },
  props: {
    demos: {
      type: Object,
      default: () => ({}),
    },
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
    const c = (await demos[props.path]()).default
    return {
      codeShow,
      c,
    }
  },
})
</script>
<template>
  <div class="demo-x">
    <Component :is="c"></Component>
    <VkCollapse v-model="codeShow" :transition-props="{
      name: 'drop-down'
    }" class="demo-source-code-x">
      <template #header>
        <SvgIcon :icon-class="'down'" :class="{
          'is-active': codeShow
        }"></SvgIcon>
      </template>
      <template #body>
        <SourceCode :source="source"></SourceCode>
      </template>
    </VkCollapse>
  </div>
</template>
<style lang="scss">
.demo-source-code-x{
  .vk-collapse-header-x{
    color: var(--c-sec-text);
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    &:hover{
      background-color: var(--c-sec-bg);
    }
  }

  .icon-down {
    transition: transform .4s ease;
    &.is-active{
      transform: rotateZ(180deg);
    }
  }
}
</style>
