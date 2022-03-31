<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { emits, props } from './ctx'
import { useMapView } from '@vuesri/shared/use'
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
export default defineComponent({
  emits, props,
  setup (props, { emit }) {
    const view = useMapView()
    class ViewOnToggleHandler extends ToggleHandler {
      eventName: string
      private handler: AnyFunc
      cacheData: any
      constructor (eventName: string, handler: AnyFunc) {
        super()
        this.eventName = eventName
        this.handler = handler
      }
      add () {
        const hr = view.on(this.eventName, this.handler)
        this.removeHandler = hr.remove
      }
    }
    const mitter = view[sMitter]

    /* 点击事件 */
    const clickHandler = new ViewOnToggleHandler('click', async (event) => {
      const hitTestResult = await view.hitTest(event)
      mitter.emit('click', { view, event, hitTestResult })
    })
    clickHandler.add()
    onUnmounted(() => {
      clickHandler.remove()
    })
    /* 点击事件 end */

    /* 鼠标移动事件 */
    const pointerMoveHandler = new ViewOnToggleHandler('pointer-move', async (event) => {
      const hitTestResult = await view.hitTest(event)
      const feature = hitTestResult.results[0]
      const ownLayer = feature?.graphic.layer
      // 根据第一个要素layer上指明的 cursor 改变鼠标样式
      if (ownLayer) {
        const cursor = ownLayer[sCursor]
        emit('update:cursor', cursor)
      } else {
        emit('update:cursor', 'initial')
      }
      mitter.emit('pointer-move', { view, event, hitTestResult })
    })
    pointerMoveHandler.add()
    onUnmounted(() => {
      pointerMoveHandler.remove()
    })
    /* 鼠标移动事件 end */

    /* drag事件 */
    const dragHandler = new ViewOnToggleHandler('drag', (e: __esri.ViewDragEvent) => {
      if (props.limitExtent) {
        let { xmax, xmin, ymax, ymin, center: currentCenter } = view.extent
        switch (true) {
        case xmin < props.limitExtent.xmin:
          xmin = props.limitExtent.xmin
        case ymin < props.limitExtent.ymin:
          ymin = props.limitExtent.ymin
        case xmax > props.limitExtent.xmax:
          xmax = props.limitExtent.xmax
        case ymax > props.limitExtent.ymax:
          ymax = props.limitExtent.ymax
          break
        default:
          dragHandler.cacheData = currentCenter.clone()
          return
        }
        if (e.action === 'end' || e.action === 'update') {
          window.requestAnimationFrame(() => {
            if (dragHandler.cacheData) view.goTo(dragHandler.cacheData)
          })
        }
      }
    })
    props.limitExtent && dragHandler.add()
    onUnmounted(() => {
      dragHandler.remove()
    })
    /* drag事件 end */

    return () => null
  },
})
</script>
