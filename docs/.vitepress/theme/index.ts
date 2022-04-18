import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'undraw-ui/dist/style.css'
import './base.scss'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }: any) => {
    app.use(ElementPlus)
    if (typeof window != 'undefined') {
      await import('undraw-ui').then(module => {
        app.use(module.default)
      })
      // @ts-ignore
      await import('undraw-ui/dist/iconfont')
    }
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
