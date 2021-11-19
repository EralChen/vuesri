import { LIB_NAME, LIB_PRE } from '../../../config/project'
import { capitalize } from '../../../utils/string'
const pre = capitalize(LIB_PRE)

export const createIndexStr = capName => `import { App } from 'vue'
import ${pre}${capName} from './src/index.vue'
export * as __${pre}${capName} from './src/types'

${pre}${capName}.install = (app: App): void => {
  app.component(${pre}${capName}.name, ${pre}${capName})
}
export {
  ${pre}${capName},
}
export default ${pre}${capName}
`

export const createTypesStr = () => `import { ReturnVoid } from '@${LIB_NAME}/shared'
export type LoadEvent = {

}
export type OnLoad = (e:LoadEvent) => ReturnVoid
export default {}
`

export const createVueStr = (capName:string, tsStart = '', setupStart = '') => `<script lang="ts">
${tsStart}
import props from './props'
import { LoadEvent } from './types'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Vum${capName}',
  emits: {
    load: (e: LoadEvent) => e,
  },
  props,
  setup (props, { emit }) {
    ${setupStart}
    // core
    emit('load', { })
    return {}
  },
})
</script>
<template>
  <slot></slot>
</template>
`