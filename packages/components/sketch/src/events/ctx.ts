import { bindPropsFactory, onEmitsFactory } from '@vuesri/shared/helper/ctx'
import { PropType } from 'vue'

export const props = {
  modelValue: {
    type: [Array, Object] as PropType<__esri.Graphic[]|__esri.Collection<__esri.Graphic>>,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: true,
  },
}

export const createBindProps = bindPropsFactory(props)

export const emits = {
  'update:modelValue': (e: __esri.Collection<__esri.Graphic> | __esri.Graphic[]) => e,
  'complete': (e:  __esri.SketchCreateEvent | __esri.SketchUpdateEvent) => e,
}

export const createOnEmits = onEmitsFactory(emits)