---
title: tags
---

## 基础用法
右键打开菜单，可以执行相应操作

:::demo
tags/basic
:::

## Tags 属性

| 属性  | 说明          | 类型             | 默认值 |
|-------|--------------|------------------|-------|
| v-model | 绑定值 | string | -     |
| classic  | 经典模式 | boolean           | true   |

## Comment 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| select | 选择标签触发 | (tag: TagApi) => void |
| refresh | 刷新事件    | (tag: TagApi) => void |
| close   | 关闭事件    | (tag: TagApi) => void |
| closeOther   | 关闭其他事件    | (tag: TagApi) => void |
| closeOther   | 关闭全部事件    | () => void |
| fullScreen   | 全屏事件    | (tag: TagApi) => void |

## 接口类型

```ts
export interface TagApi {
  path: string
  name?: string
  meta: {
    title: string
    isAffix: boolean
    isKeepAlive?: boolean
  }
}

```