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
import { CommentApi, ElDropdown, ElDropdownItem, ElDropdownMenu, UToast} from 'undraw-ui'

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

## 导航栏排序
:::demo 使用v-comment-nav组件切换评论最新和排序，也可自定义默认卡槽
comment/nav-sort
:::

## 评论滚动
**滚动样式受到文档样式影响，体验效果请在本地使用**
:::demo 使用v-comment-scroll组件实现评论滚动 
comment/scroll
:::

## @mention提及
:::demo
comment/mention
:::


## Comment 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| config | 评论    |  ConfigApi  | -      |
| upload | 是否上传图片    |  boolean  | false      |
| page | 是否启动回复分页    |  boolean  | false      |
| relative-time | 是否使用相对时间    |  boolean  | false      |

## config 属性

| 属性    | 说明 | 类型           | 默认值 |
|----------|-------|---------------|--------|
| aTarget       | 头像链接a标签target | _blank / _parent / _self / _top |
| showForm      | 是否显示评论表单     | boolean     | true  |
| showContent   | 是否显示评论内容     | boolean     | true  |
| showReply   | 是否显示回复按钮     | boolean     | true  |
| showLevel     | 是否显示等级     | boolean     | true  |
| showLikes     | 是否显示点赞    | boolean     | true  |
| showAddress     | 是否显示地址    | boolean     | true  |
| showHomeLink     | 是否启用个人主页链接     | boolean     | true  |
| placeholder     | 输入框占位文本     | string     | 输入评论（Enter换行，Ctrl + Enter发送）  |

## Comment 事件

| 事件名 | 说明 | 回调参数 |
|-------|------|----------|
| submit|提交评论| (submitParam: SubmitParamApi) => void |
| like | 点赞 | (id: number, finish: () => void) => void |
| reply-page | 回复分页 | (replaygeParam: ReplyPageParamApi) => void |
| show-info | 获取用户详细信息 | (id: number, show: Function) => void |
| cancel    |  取消事件按钮    |  () => void    |

## 接口类型
```ts
export interface CommentApi {
    id: string | number;
    parentId: string | number | null;
    uid: string | number;
    address?: string;
    content: string;
    likes?: number;
    contentImg?: string;
    createTime: string;
    user: CommentUserApi;
    reply?: ReplyApi | null;
}
export interface ReplyApi {
    total: number;
    list: CommentApi[];
}
export interface CommentUserApi {
    username: string;
    avatar: string;
    level?: number;
    homeLink?: string;
}
export interface UserApi {
    id: string | number;
    username: string;
    avatar: string;
    likeIds?: string[] | number[];
}
export interface ConfigApi {
    user: UserApi;
    emoji: EmojiApi;
    comments: CommentApi[];
    replyShowSize?: number;
    showForm?: boolean;
    showContent?: boolean;
    showLevel?: boolean;
    showLikes?: boolean;
    showAddress?: boolean;
    showHomeLink?: boolean;
    showReply?: boolean;
    placeholder?: string;
    aTarget?: '_blank' | '_parent' | '_self' | '_top';
    mentionConfig?: {
        isLoading?: boolean;
        show?: boolean;
        userIdKey?: string;
        userNameKey?: string;
        userAvatarKey?: string;
        mentionColor?: string;
        userArr?: any[];
        showAvatar?: boolean;
    };
}
export interface SubmitParamApi {
    content: string;
    parentId: string | null;
    files?: any[];
    reply?: CommentApi;
    finish: (comment?: CommentApi) => void;
    mentionList?: any[];
}
export interface ReplyPageParamApi {
    parentId: string;
    pageNum: number;
    pageSize: number;
    finish: (reply: ReplyApi) => void;
}

```