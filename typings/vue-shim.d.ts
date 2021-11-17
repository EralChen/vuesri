
declare module '*.vue' {
  import type { App, DefineComponent } from 'vue'
  const component: DefineComponent<Record<string|symbol, any>, Record<string|symbol, any>, any> & {
    install(app: App): void
  }
  export default component
}
