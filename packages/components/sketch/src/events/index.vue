<script lang="ts">
import { useGraphicsLayer, useSketch } from '@vuesri/shared/use'
import { defineComponent, onUnmounted } from 'vue'
import { props, emits } from './ctx'
export default defineComponent({
  props,
  emits,
  setup (props, { emit }) {
    const sketch = useSketch()
    const layer = useGraphicsLayer()

    /* create */
    const createHandle = sketch.on('create', (e) => {
      emit('create', e)
      if (e.state === 'start') {

        if (!props.multiple) { // 仅绘制单面
          layer.removeAll()
        }

      } else if (e.state === 'complete') {

          
        if (!props.multiple
            && layer.graphics.length > 1
            && e.graphic.geometry.type === 'point'
        ) { // 绘制点 没有start事件
          layer.remove(layer.graphics.getItemAt(0))
        }
        
        emit('update:modelValue', layer.graphics)
        emit('complete', e)
      }
    })
    onUnmounted(() => {
      createHandle.remove()
    })
    /* create end */

    /* update */
    const updateHandle = sketch.on('update', (e) => {
      emit('update', e)
      if (e.state === 'complete') {
        emit('update:modelValue', layer.graphics)
        emit('complete', e)
      }
    })
    onUnmounted(() => {
      updateHandle.remove()
    })
    /* update end */



    return () => null
  },
})
</script>