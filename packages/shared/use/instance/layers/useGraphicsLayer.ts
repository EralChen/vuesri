import { inject } from 'vue'

export function useGraphicsLayer () {
  const layer = inject<__esri.GraphicsLayer>('vaGraphicsLayer')
  if (!layer) {
    throw new Error('The component which use useGraphicsLayer() must be in a GraphicsLayer component')
  }
  return layer
}
