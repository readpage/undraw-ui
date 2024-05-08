import { createApp } from 'vue'
import App from './App.vue'

import UndrawUi from '~/index'
import '~/styles/index.scss'

const app = createApp(App)
app.use(UndrawUi)
app.mount('#app')
