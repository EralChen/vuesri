<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useView } from '@vuesri/shared/use'
import { sMitter } from '@vuesri/shared/symbol'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
import { throttle } from 'lodash-es'
export default defineComponent({
  setup () {
    const view = useView()
    class ViewWatchToggleHandler extends ToggleHandler {
      propertyName: string
      private handler: AnyFunc
      cacheData: unknown
      constructor (propertyName: string, handler: AnyFunc) {
        super()
        this.propertyName = propertyName
        this.handler = handler
      }
      add () {
        const hr = view.watch(this.propertyName, this.handler)
        this.removeHandler = hr.remove
      }
    }
    const mitter = view[sMitter]  

    /* extentWatch */
    const extentWatch = new ViewWatchToggleHandler('extent', throttle((v: __esri.Extent, ov: __esri.Extent) => {
      mitter.emit('watch:extent', [v, ov])
    }, 50))
    extentWatch.add()
    onUnmounted(() => {
      extentWatch.remove()
    })
    /* extentWatch end */
    /* scaleWatch */
    const scaleWatch = new ViewWatchToggleHandler('scale', throttle((v: number, ov: number) => {
      mitter.emit('watch:scale', [v, ov])
    }, 50))
    scaleWatch.add()
    onUnmounted(() => {
      scaleWatch.remove()
    })
    /* extentWatch end */
    return () => null
  },
})
</script>
