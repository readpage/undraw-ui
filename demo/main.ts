import { createApp } from 'vue'
import App from './App.vue'

import UndrawUi from '~/index'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
// app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
