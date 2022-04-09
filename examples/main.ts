import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vite-plugin-vuedoc/style.css'
import './assets/markdown.scss'
import UndrawUi from '~/index'
// import UndrawUi from '^/index'
import 'undraw-ui/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(UndrawUi)
app.mount('#app')
