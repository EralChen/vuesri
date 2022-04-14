import { UiAddPosition } from '@vuesri/shared/types'
import { PropType } from 'vue'
import { LoadEvent } from './types'

export const props = {
  position: {
    type: [String, Object] as PropType<UiAddPosition>,
    default: 'manual',
  },
}

export const emits = {
  load: (e: LoadEvent) => e,
}
