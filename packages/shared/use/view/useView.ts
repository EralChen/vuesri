import { inject } from 'vue'

export function useView () {
  const view = inject<__esri.View>('vaView')
  if (!view) {
    throw new Error('The component which use useView() must be in a View component')
  }
  return view
}
