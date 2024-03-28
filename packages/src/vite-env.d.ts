export {} // 这个必须加上，不加会覆盖原始类型

declare module 'vue' {
  interface ComponentCustomProperties {
    $u: (val: string) => any
  }
}
