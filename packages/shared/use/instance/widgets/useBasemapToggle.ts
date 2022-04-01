import { inject } from 'vue'

export function useBasemapToggle () {
  const basemapToggle = inject<__esri.BasemapToggle>('vaBasemapToggle')
  if (!basemapToggle) {
    throw new Error('The component which use useBasemapToggle() must be in <VaBasemapToggle>')
  }
  return basemapToggle
}

