import { inject } from 'vue'

export function useViewUi () {
  const el = inject<HTMLDivElement>('vaViewUi')
  if (!el) {
    throw new Error('The component which use useViewUi() must be in <VaViewUi>')
  }
  return el
}

