import { inject } from 'vue'

export function useBasemap () {
  const basemap = inject<__esri.Basemap>('vaBasemap')
  if (!basemap) {
    throw new Error('The component which use useBasemap() must be in <VaBasemap>')
  }
  return basemap
}

