<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { emits, props } from './ctx'
import { useView } from '@vuesri/shared/use'
import { sCursor, sMitter } from '@vuesri/shared/symbol'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
export default defineComponent({
  emits, props,
  setup (props, { emit }) {
    const view = useView() as __esri.MapView | __esri.SceneView
    class ViewOnToggleHandler extends ToggleHandler {
      eventName: string
      private handler: AnyFunc
      cacheData: unknown
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

    return () => null
  },
})
</script>
