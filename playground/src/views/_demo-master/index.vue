<script lang="ts">
import { getTestData } from '@/api/_demo-master'
import { useUserStore } from '@/store/user'
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const user = useUserStore()
    const name = user.userInfo.username
    getTestData().then(res => {
      console.log(res)
    })
    return {
      name,
    }
  },
})
</script>
<template>
    {{ name }}
    <svg-icon iconClass="home-indicator"></svg-icon>
</template>
