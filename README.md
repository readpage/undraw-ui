  <p align="center" style="line-height: 55px; height: 80px">
    <img width="55px" style="vertical-align: top;"  src="https://s2.loli.net/2022/04/19/srdvW4MyYbmzIUD.png">
    <span style="font-size: 40px; ">ndrawUI</span>
  </p>
<p align="center">
   <a href="https://www.npmjs.org/package/undraw-ui">
    <img src="https://img.shields.io/npm/v/undraw-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/undraw-ui?minimal=true">
    <img src="https://img.shields.io/npm/dm/undraw-ui.svg">
  </a>
  <a href="https://github.com/vuejs/core">
    <img src="https://img.shields.io/badge/dependencies-vue%E2%89%A53.2.0-green">
  </a>
   <a href="https://github.com/element-plus/element-plus">
    <img src="https://img.shields.io/badge/dependencies-ElementPlus%E2%89%A52.1.8-green">
  </a>


<p align="center">Undraw UI - A Vue.js 3 UI library</p>

# 安装

使用`npm`安装

```bash
npm i undraw-ui
```



# 使用

1. 因为本组件是基于 `element-plus` 开发。首先需要引入 `element-plus`。

```bash
npm i element-plus
```

2. 在 `main.ts` 中引入组件

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
```

# 开发交流

敬请期待...

