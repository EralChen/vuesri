import { inject } from 'vue'

export function useSceneView () {
  const view = inject<__esri.SceneView>('vaSceneView')
  if (!view) {
    throw new Error('The component which use useSceneView() must be in <VaSceneView>')
  }
  return view
}
