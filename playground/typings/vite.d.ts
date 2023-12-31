/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
declare module '*.vue' {
  // eslint-disable-next-line
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  // eslint-disable-next-line
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}


declare module 'voie-pages' {
  import { RouteRecordRaw } from 'vue-router'
  const routes:RouteRecordRaw[]
  export default routes
}