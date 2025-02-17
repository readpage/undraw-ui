# 安装

使用`npm`安装  

element-plus可以选择需要版本
```sh
npm i element-plus@2.6.0 undraw-ui@1.2.6
```

# 导入

## 按需导入(推荐)
您需要使用额外的插件来导入要使用的组件。  
首先你需要安装 unplugin-vue-components插件。

```sh
npm install -D unplugin-vue-components
```

然后修改 vite.config.ts 或 vue.config.js 的配置。

```ts
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

## 全局注册(不推荐)-选择按需导入忽略
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
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
