---
title: Comment
---

# Comment 评论
功能: 评论回复、点赞、支持表情包、删除评论、图片上传

[Comment代码实例地址](https://gitee.com/undraw/undraw-ui-demo)

## 基础用法
:::demo
comment/basic
:::

## 回复分页
:::demo
comment/page
:::


## 查询用户信息
鼠标移动在头像内显示用户信息
:::demo
comment/user-info
:::


## Comment 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| config | 评论    |  ConfigApi  | -      |

## Comment 事件

| 事件名 | 说明 | 回调参数 |
|-------|------|----------|
| submit|提交评论| (content: string, parentId: number, finish: (comment: CommentApi) => void) => void |
| like | 点赞 | (id: number, finish: () => void) => void |
| remove | 删除评论 | (id: number, finish: () => void) => void |
| report | 举报用户 | (id: number, finish: () => void) => void |
| replyPage | 回复分页 | (parentId: string, pageNum: number, pageSize: number, finish: (comments: CommentApi[]) => void) => void |
| getUser | 获取用户详细信息 | (id: number, show: Function) => void |

## 接口类型
```ts
export interface ConfigApi {
    user: UserApi
    emoji: EmojiApi
    comments: CommentApi[]
}

export interface CommentApi {
    id: number
    parentId: number | null
    uid: number
    username: string
    avatar: string
    level: number
    link: string
    address: string
    content: string
    like: number
    createTime: string
    reply?: ReplyApi | null
}

export interface UserApi {
    id: number
    username: string
    avatar: string
    likes: number[]
}

export interface ReplyApi {
    total: number;
    list: CommentApi[]
}

export interface ReplyPageParam {
  parentId: string
  pageNum: number
  pageSize: number
  finish: (comments: CommentApi[]) => void
}

export interface ReplyParam {
    replyMore: (parentId: number, closeLoad: Function) => void
    replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (comments: CommentApi[]) => void) => void
}

```