export const getDeepValue = <T = unknown>(o:Record<string, any>, keys: string[]): T => {
  const _keys = [...keys]

  function getValue (o: Record<string, any>,ks: string[]): T {
    const v = o[ks[0]]
    ks.shift()
    if (ks.length) {
      return getValue(v, ks)
    } else {
      return v
    }
  }
  return getValue(o, _keys)

  
}
