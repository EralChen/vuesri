<script lang="ts">
import { props } from './ctx'
import { defineComponent, provide, shallowReactive, VNode } from 'vue'
import { sLayerItems } from '@vuesri/components/tree-layer-group/src/symbols'
import { AnyFunc } from 'vunk/shared/types'
import { TreeNode } from './types'
export default defineComponent({
  name: 'VaTreeLayerGroup',
  props,
  setup (props, ctx) {
    // core
    // 收集tree-layer-item的实例到这个这个变量中 形成type: vm的键值对
    const layerItems = shallowReactive<Record<string, { slots: {default: AnyFunc} }>>({})
    provide(sLayerItems, layerItems)
    const slots = ctx.slots as any
    return () => {
      const tempSlots = slots.default() // 加载需要的temp
      const renderTreeList = (list: TreeNode[]) => {
        const stack = [...list]
        let i = 0
        while (stack[i]) {
          const children = stack[i].children
          if (children) {
            stack.push(...children)
          }
          i++
        }
        return stack.reduce((a, c) => {
          if (c.layer && layerItems[c.layer.type]) {
            // 向插槽提供 layer和 node 变量
            a.push(layerItems[c.layer.type].slots.default({layer: c.layer, node: c}))
          }
          return a
        }, [] as VNode[])
      }
      return [
        tempSlots, // slots 会添加 vm 到 layerItems中
        renderTreeList(props.data),
      ]
    }
  },
})
</script>
