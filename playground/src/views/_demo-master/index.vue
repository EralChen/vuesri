<script lang="tsx">
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/user'
export default defineComponent({
  setup () {
    const user = useUserStore()
    const name = user.userInfo.username
    return () => <>
    123{name}
    <svg-icon iconClass={'home-indicator'}></svg-icon>
    </>
  },
})
</script>
