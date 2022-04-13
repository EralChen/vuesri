import { LIB_NAME, LIB_PRE } from '../../../config/project'
import { hyphenate, capitalize } from '../../../utils/string'
const pre = capitalize(LIB_PRE)
export const createVueStr = (capName: string) => `<script lang="ts" setup>
import { ${pre}${capName} } from '@${LIB_NAME}/components/${hyphenate(capName)}'
import { VaMapView } from '@vuesri/components/map-view'
import { VaSkyBasemap } from '@vuesri/components/sky-basemap'
</script>
<template>
<VaMapView>
  <VaSkyBasemap></VaSkyBasemap>
  <${pre}${capName}></${pre}${capName}>
</VaMapView>
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