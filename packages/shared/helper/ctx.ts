import { computed } from 'vue'

export const bindPropsFactory = <
  T1 extends Record<string, any>,
>(propsOption: T1) => {
  return <
    T2 extends Record<string, any>, 
    EX extends (keyof T2)[],
    K extends Extract<Exclude<keyof T2, EX[number]>, keyof T1> ,
  >
  (propsArg: T2, excludes?: EX) => computed(() => Reflect.ownKeys(propsOption).reduce((a, c) => {
    if (typeof c === 'string' && !excludes?.includes(c)) {
      a[c] = propsArg[c]
    }
    return a
  }, {} as { [k in K]: T2[k] })) 
}

export const onEmitsFactory = <
  T1 extends Record<string, any>,
>(emitsOption: T1) => {
  return <
    T2 extends (...args:any) => any, 
    EX extends (keyof T1)[],
    K extends keyof T1
  >
  (emit: T2, excludes?: EX) => Reflect.ownKeys(emitsOption).reduce((a, c) => {
    if (typeof c === 'string' && !excludes?.includes(c)) {
      a[c] = (e: Parameters<T2>[1]) => emit(c, e)
    }
    return a
  }, {} as { [k in K]: T2 })
}

