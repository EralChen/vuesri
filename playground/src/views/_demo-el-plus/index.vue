<script lang="ts">
import { setRootStyle } from '@/utils/root'
import { defineComponent, ref } from 'vue'
import { getOrgTree } from '@/api/_demo-el-plus'
export default defineComponent({
  setup () {
    const color = ref('')
    const changeColor = (color: string) => {
      setRootStyle({
        '--c-primary': color,
      })
    }
    getOrgTree().then(res => {
      console.log(res)
    })
    
    return {
      color,
      changeColor,
    }
  },
})
</script>
<template>
  <el-color-picker v-model="color" show-alpha  @change="changeColor" />
  <p class="test">home</p>
</template>
<style>
.test{
  color: var(--c-primary);
}
</style>
