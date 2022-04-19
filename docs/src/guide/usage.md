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