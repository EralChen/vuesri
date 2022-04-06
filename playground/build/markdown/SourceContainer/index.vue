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
      default: 'vue',
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
    function unescapeHTML (a: string){
      a = '' + a
      return a.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
    }
    const jsonDescription = computed(() => {
      let json = unescapeHTML(decodeURIComponent(props.description)) as any
      const match = json.match(/<.+>(.+)<\/.+>/)
      json = match ? match[1] : ''
      try {
        json = JSON.parse(json)
      } catch {
        json = {
          msg: json,
        }
      }
      return {
        sourceIf: true,
        ...json,
      } 
    })
    return {
      codeShow,
      jsonDescription,
    }
  },
})
</script>
<template>

   
    <VkCollapse
      v-model="codeShow"
      :transition-props="{
        name: 'drop-down'
      }"
      class="demo-source-code-x"
      v-if="jsonDescription.sourceIf"
    >
      <template #header>
        <SvgIcon :icon-class="'down'" :class="{
          'is-active': codeShow
        }"></SvgIcon> <span v-html="jsonDescription.msg"></span>
      </template>
      <template #body>
        <SourceCode :source="source" :type="type"></SourceCode>
      </template>
    </VkCollapse>

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
      background-color: var(--c-bg-s);
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
