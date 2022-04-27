import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'undraw-ui/dist/style.css'
import './base.scss'
import NavBar from '../components/navbar/navbar.vue'

export default {
  ...DefaultTheme,
  Layout: NavBar,
  enhanceApp: ({ app }: any) => {
    app.use(ElementPlus)
    if (typeof window != 'undefined') {
      import('undraw-ui').then(module => {
        app.use(module.default)
      })
      // @ts-ignore
      import('undraw-ui/dist/iconfont')
    }
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
