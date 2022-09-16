declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import { DefineOptions } from 'unplugin-vue-define-options/vite'
  const component: DefineComponent<{}, {}, any>
  export default component
  export function DefineOptions<DefineComponent>(): Readonly<DefineComponent>
}
