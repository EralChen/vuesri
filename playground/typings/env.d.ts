interface ImportMetaEnv {
  VITE_BASE_URL: string
  VITE_BASE_API: string
  VITE_SYS_API: string
}
type Unpromisify<T> = T extends Promise<infer R> ? R : T;
type ApiReturnType<T extends (...args: unknown[]) => unknown> = Unpromisify<ReturnType<T>>

// [TODO] add svg icon class name
type SVGIconClass = 'home-indicator'
