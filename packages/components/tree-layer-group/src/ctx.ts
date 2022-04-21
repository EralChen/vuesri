import { PropType } from 'vue'
import { TreeNode } from './types'


export const props = {
  data: {
    type: Array as PropType<TreeNode[]>,
    default: () => [],
  },
}
