import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'undraw-ui/dist/style.css'
import './base.scss'


export default {
  ...DefaultTheme,
  enhanceApp: ({ app }: any) => {
    app.use(ElementPlus)
    if (typeof window != 'undefined') {
      import('undraw-ui').then(module => {
        app.use(module.default)
      })
      //@ts-ignore
      import('./iconpark.js')
    }
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
