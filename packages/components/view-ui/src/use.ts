import { UiAddPosition } from '@vuesri/shared/types'
import { onActivated, onBeforeUnmount, watchEffect } from 'vue'
export const useAddUi = (uix:__esri.DefaultUI, component: any, props: {
  position: UiAddPosition
}) => {

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