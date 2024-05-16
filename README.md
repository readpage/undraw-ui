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

element-plus可以选择需要版本
```sh
npm i element-plus2.6.0 undraw-ui@1.1.1
```


## 按需导入(推荐)
您需要使用额外的插件来导入要使用的组件。  
首先你需要安装 unplugin-vue-components 和 unplugin-auto-import 两款插件。

```sh
npm install -D unplugin-vue-components unplugin-auto-import
```

然后修改 vite.config.ts 或 vue.config.js 的配置。

```ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { UndrawUiResolver } from 'undraw-ui/es/resolvers'

export default {
  plugins: [
    Components({
      resolvers: [UndrawUiResolver]
    }),
  ],
}
```

## 全局注册
```ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
```

## 使用

### fold 折叠组件

```vue
<template>
  <div style="width: 200px;">
    <u-fold line="1">
      <p>每当白日依山尽，夕阳余辉便透过朵朵云层，像万道金光，如霞光万丈，把天空白云染得红彤彤，把大地山河映得金灿灿，仿佛整个世界在那一瞬间都变得金碧辉煌，热情奔放起来</p>
    </u-fold>
    <u-divider />
    <u-fold line="2">
      孩子或者像孩子一样单纯的人，目的意识淡薄，沉浸在过程中，过程和目的浑然不分，他们能够随遇而安，即事起兴，不易感到无聊。商人或者像商人一样精明的人，有非常明确实际的目的，以此指导行动，规划过程，目的与过程丝丝相扣，他们能够聚精会神，分秒必争，也不易感到无聊。怕就怕既失去了孩子的单纯，又不肯学商人的精明，目的意识强烈却并无明确实际的目的，有所追求但所求不是太缥缈就是太模糊。
    </u-fold>
    <!-- 使用属性 unfold 启动展开和折叠功能 -->
    <u-fold unfold line="1">
      <p>
        时间不是某种从我们身上流过的东西，而就是我的生命。弃我而去的不是日历上的一个个日子，而是我生命中的岁月；甚至也不仅仅是我的岁月，而就是我自己。我不但找不回逝去的岁月，而且也找不回从前的我了。
      </p>
    </u-fold>
  </div>
</template>
```


### 评论组件
[基础使用-vite模板地址](https://gitee.com/undraw/undraw-ui-demo/tree/master/Vue)  
[组件后端相关实例](https://gitee.com/undraw/undraw-ui-demo/tree/master/Java)  
[增强功能地址](https://readpage.github.io/undraw-ui/components/comment.html)


## 开发交流

QQ群:[undraw(682265529)](https://jq.qq.com/?_wv=1027&k=NsgARkfw)

