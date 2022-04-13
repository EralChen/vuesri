<script lang="ts">
import { sMitter } from '@vuesri/shared/symbol'
import { useLayer, useView } from '@vuesri/shared/use'
import { __VaView } from '@vuesri/components/view'
import { defineComponent, onUnmounted } from 'vue'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
import { emits } from './ctx'
export default defineComponent({
  emits,
  setup (props, { emit }) {
    const view = useView() as __esri.MapView | __esri.SceneView
    const layer = useLayer() as __esri.FeatureLayer | __esri.GraphicsLayer
    const mitter = view[sMitter]
    class MitterToggleHandler<T extends keyof __VaView.MitterEvents> extends ToggleHandler {
      name: T
      handler: AnyFunc
      constructor (name: T, handler: (e: __VaView.MitterEvents[T]) => void) {
        super()
        this.name = name
        this.handler = handler
      }
      add () {
        mitter.on(this.name, this.handler)
        this.removeHandler = () => mitter.off(this.name, this.handler)
      }
    }

    /* click mitter */
    const clickMitter = new MitterToggleHandler('click', (e) => {
      const { hitTestResult: { results } } = e
      const result = results.find(item => item.graphic.layer === layer)
      emit('click', { ...e, result, layer })
    })
    clickMitter.add()
    onUnmounted(() => {
      clickMitter.remove()
    })
    /* click mitter end */

    /* pointer move mitter */
    const pinterMoveMitter = new MitterToggleHandler('pointer-move', (e) => {
      const { hitTestResult: { results } } = e
      const result = results.find(item => item.graphic.layer === layer)
      emit('pointerMove', { ...e, result, layer })
    })
    pinterMoveMitter.add()
    onUnmounted(() => {
      pinterMoveMitter.remove()
    })
    /* pointer move mitter */


    return () => null
  },
})
</script>
