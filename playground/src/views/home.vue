<script lang="ts">
import { defineComponent } from 'vue'
import componentsRouter from './_demo-components.json'
export default defineComponent({
  name: 'PlayHome',
  setup () {
    const exampleLinkList:{title: string, data: {to: string, label: string}[]}[] = [
      ...componentsRouter,
    ]
    return {
      exampleLinkList,
    }
  },
})
</script>
<template>

  <div v-for="item of exampleLinkList" :key="item.title">
    <h2>{{item.title}}</h2>
    <p v-for="v of item.data" :key="v.to">
      <RouterLink :to="v.to">{{v.label}}</RouterLink>
    </p>

  </div>

</template>
