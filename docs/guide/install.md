# 安装

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
