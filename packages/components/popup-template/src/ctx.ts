import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  defaultOptions: {
    type: Object as PropType<__esri.PopupTemplateProperties>,
    default: () => ({}),
  },
  title: {
    type: [String, Function, Promise] as PropType<__esri.PopupTemplate['title']>,
    default: '',
  },
  orphan: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}