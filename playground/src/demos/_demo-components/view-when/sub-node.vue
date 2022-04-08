<script lang="ts">
import { useView } from '@vuesri/shared/use'
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const view = useView()
    const spatialReference = view.spatialReference
    console.log(spatialReference) // view.when() 之后，可以获取到view根据底图生成的坐标系信息
    return () => null
  },
})
</script>

