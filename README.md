  <p align="center">
    <img src="https://s2.loli.net/2022/04/19/m4aqSs6DINYCLjG.png">
  </p>
<p align="center">
   <a href="https://www.npmjs.org/package/undraw-ui">
    <img src="https://img.shields.io/npm/v/undraw-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/undraw-ui?minimal=true">
    <img src="https://img.shields.io/npm/dt/undraw-ui.svg">
  </a>
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/dependencies-vue%E2%89%A53.2.25-green">
  </a>



<p align="center">Undraw UI - A Vue.js 3 UI library</p>

## 🔥功能

**折叠、评论、锚点、搜索**



1. 折叠

![](https://s2.loli.net/2022/04/28/frd5h8bulF7SZK6.png)


2. 评论

![](https://s2.loli.net/2022/04/28/HtGWBxsJ5LljDEU.png)

<p style="text-align: center">暗黑主题<p>

![img](https://gitee.com/undraw/undraw-ui/raw/master/public/docs/comment-dark.png)

3. 搜索(input关键词动态滚动)

![](https://s2.loli.net/2022/06/22/juvX79t6OPcaWZs.png)

4. 锚点

![](https://s2.loli.net/2022/04/30/r2XbGviK8FqUoRQ.png)

## 入门

请遵循[https://undraw.gitee.io/undraw-ui/](https://undraw.gitee.io/undraw-ui/)上的文档!

## 地址

- [gitee⚡️](https://gitee.com/undraw/undraw-ui)
- [github📌](https://github.com/readpage/undraw-ui)

## 安装

使用`npm`安装

***vue低于3.2.25可能无法正常使用  可选依赖：使用element-plus低于2.1.8会出现input样式冲突***
```bash
npm i undraw-ui@1.0.7
```



## 使用

1. 在 `main.ts` 中引入组件

```ts
import { createApp } from 'vue'
import App from './App.vue'

import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.use(UndrawUi)
app.mount('#app')
```

2. 在`App.vue`中使用
> (1)下载表情包资源[emoji.zip下载](https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0)  
> (2)static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置  
> (3)js实例地址[comment-js.vue](https://undraw.gitee.io/undraw-ui/guide/usage.html)


```ts
<template>
  <u-comment :config="config" @submit="submit">
    <!-- <template>导航栏卡槽</template> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #info>信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://gitee.com/undraw/undraw-ui/releases/tag/v0.0.0
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from './emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast } from 'undraw-ui'

defineOptions({
  name: 'comment'
})

const config = reactive<ConfigApi>({
  user: {} as any,
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false
})

// 评论数据
setTimeout(() => {
  config.user = {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100'
  }
  config.comments = [
    {
      id: '1',
      parentId: null,
      uid: '1',
      content: '等闲识得东风面，万紫千红总是春。',
      createTime: '2023-04-30 16:22',
      user: {
        username: '团团喵喵',
        avatar: 'https://static.juzicon.com/user/avatar-23ac4bfe-ae93-4e0b-9f13-f22f22c7fc12-221001003441-Y0MB.jpeg'
      }
    },
    {
      id: '2',
      parentId: null,
      uid: '2',
      content: '长风破浪会有时，直挂云帆济沧海。',
      createTime: '2023-04-28 09:00',
      user: {
        username: '且美且独立',
        avatar: 'https://static.juzicon.com/avatars/avatar-20200926115919-a45y.jpeg'
      }
    }
  ]
}, 500)

// 评论提交事件
let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish }: SubmitParamApi) => {
  console.log('提交评论: ' + content, parentId, files)

  const comment: CommentApi = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    content: content,
    createTime: '1分钟前',
    user: {
      username: config.user.username,
      avatar: config.user.avatar
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
</script>


```


## 开发交流

QQ群:[undraw(682265529)](https://jq.qq.com/?_wv=1027&k=NsgARkfw)

