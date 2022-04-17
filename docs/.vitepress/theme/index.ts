import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import 'undraw-ui/dist/iconfont'
import './base.scss'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }: any) => {
    app.use(ElementPlus)
    if (typeof window != 'undefined') {
      await import('undraw-ui').then(module => {
        app.use(module.default)
      })
    }
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
