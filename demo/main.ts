import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import UndrawUi from '~/index'
import '~/base.scss'

const app = createApp(App)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
