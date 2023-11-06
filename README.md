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

***vue低于3.2.25可能无法正常使用***
```bash
npm i undraw-ui@1.0.0
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
> (1)下载表情包资源[emoji.zip下载](https://readpage.lanzouy.com/b04duelxg)，密码:undraw  
> (2)static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置  
> (3)js实例地址[comment-js.vue](https://undraw.gitee.io/undraw-ui/guide/usage.html)


```ts
<template>
  <u-comment :config="config" @submit="submit" @like="like" relative-time>
    <!-- <div>导航栏卡槽</div> -->
    <!-- <template #header>头部卡槽</template> -->
    <!-- <template #info>用户信息卡槽</template> -->
    <!-- <template #card>用户信息卡片卡槽</template> -->
    <!-- <template #opearte>操作栏卡槽</template> -->
    <!-- <template #func>功能区域卡槽</template> -->
  </u-comment>
</template>

<script setup lang="ts">
// 下载表情包资源emoji.zip https://readpage.lanzouy.com/b04duelxg 密码:undraw
// static文件放在public下,引入emoji.ts文件可以移动assets下引入,也可以自定义到指定位置
import emoji from './emoji'
import { reactive } from 'vue'
import { CommentApi, ConfigApi, SubmitParamApi, UToast, createObjectURL, dayjs } from 'undraw-ui'

const config = reactive<ConfigApi>({
  user: {
    id: 1,
    username: 'jack',
    avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
    // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
    likeIds: [1, 2, 3]
  },
  emoji: emoji,
  comments: [],
  total: 10
})

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish, reply }: SubmitParamApi) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:'
  console.log(str, reply)

  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files?.map(e => createObjectURL(e)).join('||')

  temp_id += 1
  const comment: CommentApi = {
    id: String(temp_id),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: dayjs().subtract(5, 'seconds').toString(),
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${(temp_id)}`
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id: string, finish: () => void) => {
  console.log('点赞: ' + id)
  setTimeout(() => {
    finish()
  }, 200)
}

config.comments = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    likes: 2,
    contentImg: 'https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp',
    createTime: dayjs().subtract(10, 'minute').toString(),
    user: {
      username: '落🤍尘',
      avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  }
]
</script>

```


## 开发交流

QQ群:[undraw(682265529)](https://jq.qq.com/?_wv=1027&k=NsgARkfw)

