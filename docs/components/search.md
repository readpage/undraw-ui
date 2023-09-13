---
title: Search
---

# Search 搜索

## 基础用法
:::demo
search/basic
:::


## Search 属性

| 属性  | 说明          | 类型                         | 默认值 |
|-------|--------------|------------------------------|-------|
| search | 可选输入框默认值 | string | ''   |
| config | 搜索配置 | SearchConfig | -     |
| submit | 搜索提交事件 | (val: string) => void            | -    |

## 接口类型

```ts

export interface SearchConfig {
  search?: string
  keywords: string[]
  hotSearchList: string[]
}

```