import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import './base.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }: any) => {
    import('highlight.js/lib/common')
    import('@highlightjs/vue-plugin').then(module => {
      app.use(module.default)
    })
    app.use(ElementPlus)
    app.use(UndrawUi)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
