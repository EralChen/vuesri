import { inject } from 'vue'

export function useFeatureLayer () {
  const layer = inject<__esri.FeatureLayer>('vaFeatureLayer')
  if (!layer) {
    throw new Error('The component which use useFeatureLayer() must be in a FeatureLayer component')
  }
  return layer
}
