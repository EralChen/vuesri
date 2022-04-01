import { inject } from 'vue'

export function useMapView () {
  const view = inject<__esri.MapView>('vaMapView')
  if (!view) {
    throw new Error('The component which use useMapView() must be in <VaSceneView>')
  }
  return view
}
