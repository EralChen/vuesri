import { onActivated, onDeactivated, watchEffect } from 'vue'

export function useSetVisible (
  instance: {
    visible: boolean,
    [s: string]: any
  },
  props: {
  visible: boolean
}) {
  watchEffect(() => {
    instance.visible = props.visible
  })
  onDeactivated(() => {
    instance.visible = false
  })
  onActivated(() => {
    instance.visible = props.visible
  })
}
