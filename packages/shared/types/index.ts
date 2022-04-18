import type { Emitter } from 'mitt'
export type UiAddPosition = 'bottom-leading'|'bottom-left'|'bottom-right'|'bottom-trailing'|'top-leading'|'top-left'|'top-right'|'top-trailing'|'manual' | __esri.UIAddPosition
export type EmitterValue<T> = T extends Emitter<infer V> ? V : never
export type MapValue<T> = T extends Map<unknown, infer V> ? V : never
