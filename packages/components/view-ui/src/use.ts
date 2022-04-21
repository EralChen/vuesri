import { UiAddPosition } from '@vuesri/shared/types'
import { onActivated, onBeforeUnmount, watchEffect } from 'vue'
export const useAddUi = (uix:__esri.DefaultUI, component: any, props: {
  orphan?: boolean
  position: UiAddPosition
}) => {
  if (props.orphan) return
  watchEffect(() => {
    uix.add(component, props.position)
  })

  onBeforeUnmount(() => {
    uix.remove(component)
  })

  onActivated(() => {
    uix.add(component, props.position)
  })
  
}