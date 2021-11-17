<script lang="tsx">
import { defineComponent } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup () {
    const store = useStore()
    const name = store.state.userInfo.username
    return () => <>
    123{name}
    <svg-icon iconClass={'home-indicator'}></svg-icon>
    </>
  },
})
</script>
