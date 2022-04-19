import { inject } from 'vue'

export function useSketch () {
  const instance = inject<__esri.Sketch>('vaSketch')
  if (!instance) {
    throw new Error('The component which use useSketch() must be in a Sketch component')
  }
  return instance
}
