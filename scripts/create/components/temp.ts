import { LIB_PRE } from '../../../config/project'
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

export const createTypesStr = () => `import { ReturnVoid } from 'vunk/shared/types'
export type LoadEvent = {

}
export type OnLoad = (e:LoadEvent) => ReturnVoid
`

export const createVueStr = (capName:string) => `<script lang="ts">
import { props, emits } from './ctx'
import { LoadEvent } from './types'
import { defineComponent } from 'vue'
export default defineComponent({
  name: '${pre}${capName}',
  emits,
  props,
  setup (props, { emit }) {
    // core
    emit('load', { })
    return {}
  },
})
</script>
<template>
  <div>${capName}</div>
</template>
`

export const createCtxStr = () => `import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}`