<script lang="ts">
import { sMitter } from '@vuesri/shared/symbol'
import { useView, useGraphic } from '@vuesri/shared/use'
import { defineComponent, onUnmounted } from 'vue'
import { emits } from './ctx'
import { useMitterToggleHandler } from '@vuesri/components/view/src/use'
export default defineComponent({
  emits,
  setup (props, { emit }) {
    const view = useView()
    const graphic = useGraphic()
    const mitter = view[sMitter]
    const MitterToggleHandler = useMitterToggleHandler(mitter)

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
