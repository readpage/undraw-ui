declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import { DefineOptions } from 'unplugin-vue-define-options/vite'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
  export function DefineOptions<DefineComponent>(): Readonly<DefineComponent>
}
