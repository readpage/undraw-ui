import { DefineOptions } from 'unplugin-vue-define-options'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
  export function DefineOptions<DefineComponent>(): Readonly<DefineComponent>
}

declare module '*.md' {
  import { Component } from 'vue'
  const component: Component
  export default component
}
