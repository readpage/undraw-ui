---
title: Comment
---

# Comment 评论
功能: 评论回复、点赞、支持表情包、删除评论、图片上传

[Comment完整前后端代码实例地址](https://gitee.com/undraw/undraw-ui-demo)

## 基础用法
:::demo
comment/basic
:::

## 别名
:::demo
comment/alias
:::

## 图片上传
:::demo 使用 `uplaod` 来开启图片上传
comment/upload
:::


## 加载更多评论
**点击加载更多，然后向下滚动滚动轴**
:::demo 使用v-comment-scroll组件实现评论滚动 
comment/more
:::

## 回复分页
:::demo 使用 `page` 来开启回复分页
comment/reply-page
:::

### 分页翻译
```ts
<template>
  <el-config-provider :locale="zhCn">
    <app />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
```

## 用户信息卡片
:::demo 利用卡槽取代用户信息卡片内容, 鼠标移动在头像内显示用户信息
comment/user-card
:::

## 工具栏
:::demo 自定义操作栏卡槽
comment/tools
:::

### 操作栏实例->operate.vue
```ts
<template>
  <el-dropdown trigger="click" @command="onCommand">
    <div class="operation-warp">
        <u-icon>
          <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M586.624 234.624a74.624 74.624 0 1 1-149.184 0 74.624 74.624 0 0 1 149.12 0z m0 554.624a74.624 74.624 0 1 1-149.248 0 74.624 74.624 0 0 1 149.248 0zM512 586.624a74.624 74.624 0 1 0 0-149.248 74.624 74.624 0 0 0 0 149.248z"
              fill="currentColor"
            ></path>
          </svg>
        </u-icon>
      </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="report">举报</el-dropdown-item>
        <el-dropdown-item command="remove">删除</el-dropdown-item>
        <el-dropdown-item divided command="copy">复制</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { CommentApi, UToast } from 'undraw-ui'

interface Props {
  comment: CommentApi
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'remove', comment: CommentApi): void
}>()

const { copy } = useClipboard()

const onCommand = (command: any) => {
  switch(command) {
    case 'remove':
      emit('remove', props.comment)
      break
    case 'report':
      UToast({type: 'info', message: '举报成功: ' + props.comment.id})
      break
    case 'copy':
      copy(props.comment.content)
      UToast({type: 'info', message: '复制成功'})
  }
}

</script>

<style lang="scss" scoped>
.el-dropdown {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.operation-warp {
  font-size: 16px;
  color: #9499a0;
  cursor: pointer;
  position: relative;
}
.operation-warp:hover {
  color: #00aeec;
}
</style>

```

## @mention提及
:::demo
comment/mention
:::

## Comment 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| config | 评论    |  ConfigApi  | -      |
| page | 是否启动回复分页    |  boolean  | false      |
| relative-time | 是否使用相对时间    |  boolean  | false      |

## config 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| user   | 当前用户信息 | UserApi  | null |
| emoji   | 表情包数据 | ConfigApi['emoji']  | null |
| page   | 是否开启分页 | boolean  | false |
| mention   | 提及信息 | ConfigApi['mention']  | null |
| upload | 开启图片上传    |  ConfigApi['upload']  | null      |
| show      | 显示对象     | ConfigApi['show']     | null  |
| aTarget       | 头像链接a标签target | _blank / _parent / _self / _top |
| placeholder     | 输入框占位文本     | string     | 输入评论（Enter换行，Ctrl + Enter发送）  |

## Comment 事件

| 事件名 | 说明 | 回调参数 |
|-------|------|----------|
| submit| 提交评论| (submitParam: SubmitParamApi) => void |
| like | 点赞 | (id: number, finish: () => void) => void |
| reply-page | 回复分页 | (replaygeParam: ReplyPageParamApi) => void |
| show-info | 获取用户详细信息 | (id: number, show: Function) => void |
| cancel    |  取消事件按钮    |  () => void    |
| beforeData    |  加载前评论数据处理    | (val: CommentApi) => void    |

## 接口类型
```ts
// 评论对象
export interface CommentApi {
  id: string | number // 评论id
  parentId: string | number | null // 回复的父id, 一级评论为null
  uid: string | number // 用户id
  content: string  // 评论内容
  address?: string  // 用户地址
  likes?: number  // 点赞数量
  createTime: string  // 创建时间
  user: UserApi  // 用户对象
  reply?: ReplyApi | null // 回复数据
}

// 回复对象
export interface ReplyApi {
  total: number  // 回复总数
  list: CommentApi[]  // 回复列表
}

// 用户对象
export interface UserApi {
  id: string | number  // 用户id
  username: string  // 用户名
  avatar: string  // 用户头像
  level?: number  // 用户等级
  homeLink?: string  // 用户个人主页链接
  likeIds?: string[] | number[]  // 点赞的评论数组id
}

// 评论配置参数
export interface ConfigApi {
  user: UserApi  // 当前用户
  emoji: EmojiApi // 表情包数据
  comments: CommentApi[]  // 评论数据
  replyShowSize?: number // 回复页大小
  show?: ShowApi  // 显示对象
  aTarget?: '_blank' | '_parent' | '_self' | '_top' // 个人主页跳转方式
  mention?: MentionApi  // @提及
  upload?: (files: File[], finish: (val: string[]) => void) => void // 图片上传事件
  page?: boolean // 是否分页
  relativeTime?: boolean // 是否开启人性化时间
}

interface ShowApi {
  form?: boolean  // 是否显示评论表单
  content?: boolean  // 是否显示评论内容
  level?: boolean // 是否显示等级
  likes?: boolean  // 是否点赞
  address?: boolean  // 是否显示地址
  homeLink?: boolean // 是否跳转个人主页地址
  reply?: boolean // 是否显示回复按钮
}

// 回复分页事件
export interface CommentReplyPageApi {
  parentId: string // 父id
  pageNum: any // 页数
  pageSize: number // 页大小
  finish: (reply: ReplyApi) => void // 回调完成覆盖回复数据
}

// 提及评论事件
export interface CommentSubmitApi {
  content: string // 评论内容
  parentId: string | null // 父id
  finish: (comment?: CommentApi) => void // 回调完成添加评论数据
  reply?: CommentApi // 回复数据
  mentionList?: any[] // 提及数据
}


```