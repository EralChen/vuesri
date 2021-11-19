import { LIB_NAME, LIB_PRE } from '../../../config/project'
import { hyphenate, capitalize } from '../../../utils/string'

export const createVueStr = (capName: string) => `<script lang="ts">
import { defineComponent } from 'vue'
import { ${capitalize(LIB_PRE)}${capName} } from '@${LIB_NAME}/components/${hyphenate(capName)}'
export default defineComponent({
  components: {
    VumViewer,
    ${capitalize(LIB_PRE)}${capName},
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
    <${capitalize(LIB_PRE)}${capName}></${capitalize(LIB_PRE)}${capName}>
  </VumViewer>
</template>
`