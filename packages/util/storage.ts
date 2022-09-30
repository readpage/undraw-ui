import store from 'store'

export const storage: StoreJsAPI = store

export interface StoreJsAPI {
  readonly version: string
  readonly enabled: boolean
  get(key: string, optionalDefaultValue?: any): any
  set(key: string, value: any): any
  remove(key: string): void
  each(callback: (val: any, namespacedKey: string) => void): void
  clearAll(): void
  hasNamespace(namespace: string): boolean
  createStore(plugins?: Function[], namespace?: string): StoreJsAPI
  addPlugin(plugin: Function): void
  namespace(namespace: string): StoreJsAPI
}
