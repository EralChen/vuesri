import { PropType } from 'vue'

export const props = {
  cursor: {
    type: String,
    default: '',
  },
  limitExtent: {
    type: Object as PropType<__esri.Extent>,
    default: undefined,
  },
}

export const emits = {
  'update:cursor': (e: string) => e || true,
}