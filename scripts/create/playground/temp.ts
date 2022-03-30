import { LIB_NAME, LIB_PRE } from '../../../config/project'
import { hyphenate, capitalize } from '../../../utils/string'
const pre = capitalize(LIB_PRE)
export const createVueStr = (capName: string) => `<script lang="ts">
import { defineComponent } from 'vue'
import { ${pre}${capName} } from '@${LIB_NAME}/components/${hyphenate(capName)}'
export default defineComponent({
  components: {
    ${pre}${capName},
  },
  setup () {
    return {
    }
  },
})
</script>
<template>
  <${pre}${capName}></${pre}${capName}>
</template>
`

export const createMdStr = (options: {
  name: string,
  demoPath: string
}) => `<route>
{
  meta: {
    title: "${options.name}"
  }
}
</route>

# ${options.name}
:::demo
${options.demoPath}
:::
`