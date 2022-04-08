<script lang="ts">
import { props } from './ctx'
import { defineComponent, onUnmounted } from 'vue'
import { useMapView } from '@vuesri/shared/use'
import { sMitter } from '@vuesri/shared/symbol'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { MitterEvents } from '@vuesri/components/view/src/type'
import { AnyFunc } from 'vunk/shared/types'
import { debounce } from 'lodash-es'
export default defineComponent({
  name: 'VaLimitExtent',
  props,
  setup (props) {
    const view = useMapView()
    const mitter = view[sMitter]
    class MitterToggleHandler<T extends keyof MitterEvents> extends ToggleHandler {
      name: T
      handler: AnyFunc
      cacheData: any
      constructor (name: T, handler: (e: MitterEvents[T]) => void) {
        super()
        this.name = name
        this.handler = handler
      }
      add () {
        mitter.on(this.name, this.handler)
        this.removeHandler = () => mitter.off(this.name, this.handler)
      }
    }

    /* limit extent */
    const goToExtent = debounce((target: __esri.Extent) => {
      if (target) view.goTo({
        target: target,
        zoom: view.zoom,
      }, { duration: 1500 })
    }, 400)
    const extentMitter = new MitterToggleHandler('watch:extent', ([v]) => {
      if (props.limitExtent) {
        let { xmax, xmin, ymax, ymin } = v
        // 储存最近的一个合法范围，当移动出extent时地图，跳回
        extentMitter.cacheData ??= props.limitExtent.clone()
        switch (true) {
        case xmin < props.limitExtent.xmin:
        case ymin < props.limitExtent.ymin:
        case xmax > props.limitExtent.xmax:
        case ymax > props.limitExtent.ymax:
          goToExtent(extentMitter.cacheData as __esri.Extent)
          break
        default: 
          extentMitter.cacheData = v.clone()
          return
        }
      }
    })
    extentMitter.add()
    onUnmounted(() => {
      extentMitter.remove()
    })
    /* limit extent end*/

    return () => null
  },
})
</script>
