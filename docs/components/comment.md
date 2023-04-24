---
title: Comment
---

# Comment 评论
功能: 评论回复、点赞、支持表情包、删除评论、图片上传

[Comment完整前后端代码实例地址](https://gitee.com/undraw/undraw-comment-demo)

## 基础用法
:::demo
comment/basic
:::

## 图片上传
:::demo 使用 `uplaod` 来开启图片上传
comment/upload
:::

## 回复分页
:::demo 使用 `page` 来开启回复分页
comment/reply-page
:::

## 用户信息卡片
:::demo 利用卡槽取代用户信息卡片内容, 鼠标移动在头像内显示用户信息
comment/user-card
:::

## 工具栏
:::demo 设置config.tools值开启工具栏功能
comment/tools
:::

## 导航栏排序
:::demo 使用v-comment-nav组件切换评论最新和排序，也可自定义默认卡槽
comment/nav-sort
:::

## 评论滚动
**滚动样式受到文档样式影响，体验效果请在本地使用**
:::demo 使用v-comment-scroll组件实现评论滚动 
comment/scroll
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
| replyPage | 回复分页 | (parentId: string, pageNum: number, pageSize: number, finish: (comments: CommentApi[]) => void) => void |
| getUser | 获取用户详细信息 | (id: number, show: Function) => void |

## 接口类型
```ts
export interface CommentApi {
  id: string | number
  parentId: string | number | null
  uid: string | number
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
  id: string | number
  username: string
  avatar: string
  likeIds: string[] | number[]
}

export interface ReplyApi {
  total: number
  list: CommentApi[]
}

export interface ConfigApi {
  user: UserApi
  emoji: EmojiApi
  comments: CommentApi[]
}

export interface ReplyPageParam {
  parentId: string | number
  pageNum: number
  pageSize: number
  finish: (comments: CommentApi[]) => void
}

export interface ReplyParam {
  replyPage: (parentId: string, pageNum: number, pageSize: number, finish: (comments: CommentApi[]) => void) => void
  page: boolean
  showSize: number
  comments: Ref<CommentApi[]>
}

export interface ContentBoxParam {
  isUserInfo: boolean
  user: Ref<UserApi>
  like: (id: string) => void
  /**
   * 返回用户id，show回调是否显示用户信息卡片
   */
  getUser: (uid: string, show: Function) => void
  report: (id: string, finish: () => void) => void
  remove: (id: string, parentId: string | null, finish: () => void) => void
}

```