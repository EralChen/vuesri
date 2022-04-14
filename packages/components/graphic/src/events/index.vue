<script lang="ts">
import { sMitter } from '@vuesri/shared/symbol'
import { useView, useGraphic } from '@vuesri/shared/use'
import { defineComponent, onUnmounted } from 'vue'
import { __VaView } from '@vuesri/components/view'
import { ToggleHandler } from 'vunk/shared/utils-class/ToggleHandler'
import { AnyFunc } from 'vunk/shared/types'
import { emits } from './ctx'
export default defineComponent({
  emits,
  setup (props, { emit }) {
    const view = useView()
    const graphic = useGraphic()
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
      let result: __esri.HitTestResultResults|undefined
      if (results[0]?.graphic === graphic) {
        result = results[0]
      }
      emit('click', { ...e, result, graphic  })
    })
    clickMitter.add()
    onUnmounted(() => {
      clickMitter.remove()
    })
    /* click mitter end */

    return () => null
  },
})
</script>
