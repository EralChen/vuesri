<script lang="ts">
import { defineComponent } from 'vue'
import { VkCard } from '@vunk/components/card'
import { getOrgTree } from '@/api/demo'
import { getTestData } from '@/api/demo/arcgis'
export default defineComponent({
  components: {
    VkCard,
  },
  setup () {
    getOrgTree().then(res => {
      console.log(res)
    })
    getTestData().then(res => {
      console.log(res)
    })
    return {
    }
  },
})
</script>
<template>
  <VkCard></VkCard>
</template>
