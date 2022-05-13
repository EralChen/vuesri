import { inject } from 'vue'

export function useSublayers () {
  const instance = inject<__esri.Collection<__esri.Sublayer>>('vaSublayers')
  if (!instance) {
    throw new Error('The component which use useSublayers() must be in a has Sublayers component')
  }
  return instance
}
