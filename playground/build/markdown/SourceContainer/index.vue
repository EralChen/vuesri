<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import SourceCode from './SourceCode/index.vue'
import { VkCollapse } from 'vunk'

export default defineComponent({
  components: {
    SourceCode,
    VkCollapse,
  },
  props: {
    type: {
      type: String,
      default: 'vue'
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
  setup (props) {
    const codeShow = ref(false)
    const decodedDescription = computed(() => {
      return decodeURIComponent(props.description)
    })
    return {
      codeShow,
      decodedDescription,
    }
  },
})
</script>
<template>
  <div class="demo-x">
   
    <VkCollapse
      v-model="codeShow"
      :transition-props="{
        name: 'drop-down'
      }"
      class="demo-source-code-x"
    >
      <template #header>
        <SvgIcon :icon-class="'down'" :class="{
          'is-active': codeShow
        }"></SvgIcon> <span v-html="decodedDescription"></span>
      </template>
      <template #body>
        <SourceCode :source="source" :type="type"></SourceCode>
      </template>
    </VkCollapse>
  </div>
</template>
<style lang="scss">
.demo-source-code-x {
  .vk-collapse-header-x {
    color: var(--c-sec-text);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    &:hover {
      background-color: var(--c-sec-bg);
    }
    > * + * {
      margin-left: .5em;
    }
  }

  .icon-down {
    transition: transform 0.4s ease;
    &.is-active {
      transform: rotateZ(180deg);
    }
  }
}
</style>
