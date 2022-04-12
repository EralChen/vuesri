<script lang="ts">
import { useView } from '@vuesri/shared/use'
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const layer = useView()
    const spatialReference = layer.spatialReference
    console.log(spatialReference) // layer.when() 之后，可以获取到layer的坐标系信息
    return () => null
  },
})
</script>

