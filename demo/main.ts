import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import UndrawUi from '@/assets/index'

const app = createApp(App)
app.use(plugins)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
