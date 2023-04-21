import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'undraw-ui/dist/style.css'
import './base.scss'
import UndrawUi from 'undraw-ui'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }: any) => {
    app.use(ElementPlus)
    if (typeof window != 'undefined') {
      app.use(UndrawUi)
      //@ts-ignore
      import('./iconpark.js')
    }
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
