
export const props = {
  cursor: {
    type: String,
    default: '',
  },
}

export const emits = {
  'update:cursor': (e: string) => e || true,
}