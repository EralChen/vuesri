import { inject } from 'vue'

export function useLayer () {
  const layer = inject<__esri.Layer>('vaLayer')
  if (!layer) {
    throw new Error('The component which use useLayer() must be in a Layer component')
  }
  return layer
}
