---
title: Chat
---

# Chat 聊天室

数据为主的聊天界面。只需一个标签就可呈现通讯界面。

## 基础用法
:::demo
chat/basic
:::


## Comment 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| config | 聊天配置    |  ChatConfigApi  | -      |


## Comment 事件

| 事件名 | 说明 | 回调参数 |
|-------|------|----------|
| loadMore| 向上滚动加载事件| (finish: Function) => void |
| submit | 提交事件 | (id: number, finish: Function) => void |


## 接口类型

```ts
export interface ChatApi {
  id: string | number
  content: string
  uid: string | number
  user: {
    username: string
    avatar: string
  }
  createTime: string
}

export interface ChatConfigApi {
  user: {
    id: string | number
    username: string
    avatar: string
  }
  data: ChatApi[]
  emoji: EmojiApi
}
```