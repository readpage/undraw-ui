# 使用

因为本组件是基于 `element-plus` 开发。注意**v0.5.5**后去除了element-plus导入,只引入需要使用的组件以及样式，不使用的组件不引入，**无需引入elment-plus即可以使用**; 但是如果引入elment-plus，如果版本不一致可能部分组件会出现样式问题，请注意版本兼容性。随着更新elment-plus版本稳定了样式问题基本不会出现!

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