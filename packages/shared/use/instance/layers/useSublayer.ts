import { inject } from 'vue'

export function useSublayer () {
  const instance = inject<__esri.Sublayer>('vaSublayer')
  if (!instance) {
    throw new Error('The component which use useSublayer() must be in a  Sublayer component')
  }
  return instance
}
