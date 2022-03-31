<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useMapView } from '@vuesri/shared/use'
import { sMitter } from '@vuesri/shared/symbol'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
import { debounce, throttle } from 'lodash-es'
import { props } from './ctx'
export default defineComponent({
  props: props,
  setup (props) {
    const view = useMapView()
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

    const goToExtent = debounce((target: __esri.Extent) => {
      if (target) view.goTo({
        target: target,
        zoom: view.zoom,
      }, { duration: 1500 })
    }, 400)

    const extentWatch = new ViewWatchToggleHandler('extent', throttle((v: __esri.Extent, ov: __esri.Extent) => {
      mitter.emit('watch:extent', [v, ov])

      if (props.limitExtent) {
        let { xmax, xmin, ymax, ymin } = view.extent
        // 储存最近的一个合法范围，当移动出extent时地图，跳回
        extentWatch.cacheData ??= props.limitExtent.clone()
        switch (true) {
        case xmin < props.limitExtent.xmin:
        case ymin < props.limitExtent.ymin:
        case xmax > props.limitExtent.xmax:
        case ymax > props.limitExtent.ymax:
          goToExtent(extentWatch.cacheData as __esri.Extent)
          break
        default: 
          extentWatch.cacheData = view.extent.clone()
          return
        }
      }

    }, 400))
    
    extentWatch.add()
    onUnmounted(() => {
      extentWatch.remove()
    })
    /* extentWatch end */

    return () => null
  },
})
</script>
