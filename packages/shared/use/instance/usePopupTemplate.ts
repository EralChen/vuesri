import { inject } from 'vue'

export function usePopupTemplate () {
  const instance = inject<__esri.PopupTemplate>('vaPopupTemplate')
  if (!instance) {
    throw new Error('The component which use usePopupTemplate() must be in a PopupTemplate component')
  }
  return instance
}
