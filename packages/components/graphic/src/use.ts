
import { sIndex } from '@vuesri/shared/symbol'
import { onUnmounted, watch } from 'vue'

export function useAddGraphic (graphics:__esri.Collection<__esri.Graphic>, g:__esri.Graphic, props: {
  index?: number
  orphan?: boolean
}) {
  if (props.orphan) return // 如果当前组件被标记为孤儿，则不添加该节点
  
  g[sIndex] = props.index // 记录期望顺序
  graphics.add(g, props.index)

  // 遍历当前的layers 根据期望顺序重排图层
  const reorder = (ni: number) => {
    graphics.forEach(item => {
      if (item[sIndex] > ni) {
        graphics.reorder(item, item[sIndex])
      }
    })
  }
  if (typeof props.index === 'number') reorder(props.index)

  watch(() => props.index, v => {
    if (typeof v === 'number') {
      g[sIndex] = props.index // 更新期望顺序
      graphics.reorder(g, v)
      reorder(v)
    }
  })

  onUnmounted(() => {
    graphics.remove(g)
  })
  
}
