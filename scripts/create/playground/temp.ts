import { LIB_NAME, LIB_PRE } from '../../../config/project'
import { hyphenate, capitalize } from '../../../utils/string'
const pre = capitalize(LIB_PRE)
export const createVueStr = (capName: string) => `<script lang="ts">
import { defineComponent } from 'vue'
import { ${pre}${capName} } from '@${LIB_NAME}/components/${hyphenate(capName)}'
export default defineComponent({
  components: {
    VumViewer,
    ${pre}${capName},
  },
  setup () {
    return {
      VumViewer,
    }
  },
})
</script>
<template>
  <VumViewer>
    <${pre}${capName}></${pre}${capName}>
  </VumViewer>
</template>
`