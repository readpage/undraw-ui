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
    <img src="https://img.shields.io/badge/dependencies-vue%E2%89%A53.2.0-green">
  </a>
   <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/dependencies-ElementPlus%E2%89%A52.1.8-green">
  </a>




<p align="center">Undraw UI - A Vue.js 3 UI library</p>

## 🔥功能

**折叠、评论、锚点、搜索**



1. 折叠

![](https://s2.loli.net/2022/04/28/frd5h8bulF7SZK6.png)



2. 评论

![](https://s2.loli.net/2022/04/28/HtGWBxsJ5LljDEU.png)

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

```bash
npm i undraw-ui
```



## 使用

1. 因为本组件是基于 `element-plus` 开发。注意**v0.5.5**后去除了element-plus导入,只引入需要使用的组件以及样式，不使用的组件不引入，**无需引入elment-plus即可以使用**; 但是如果引入elment-plus，如果版本不一致可能部分组件会出现样式问题，请注意版本兼容性。随着更新elment-plus版本稳定了样式问题基本不会出现!

2. 在 `main.ts` 中引入组件

```ts
import { createApp } from 'vue'
import App from './App.vue'

import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.use(UndrawUi)
app.mount('#app')
```

## 开发交流

QQ群:[undraw(682265529)](https://jq.qq.com/?_wv=1027&k=NsgARkfw)

