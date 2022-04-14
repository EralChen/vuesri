import { inject } from 'vue'

export function useGraphic () {
  const graphic = inject<__esri.Graphic>('vaGraphic')
  if (!graphic) {
    throw new Error('The component which use useGraphic() must be in a Graphic component')
  }
  return graphic
}
