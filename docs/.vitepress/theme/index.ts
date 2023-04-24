import { globals } from '../components/index'
import DefaultTheme from 'vitepress/theme'
import './base.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'


export default {
  ...DefaultTheme,
  enhanceApp: ({ app }: any) => {
    app.use(ElementPlus)
    app.use(UndrawUi)
    app.use(hljsVuePlugin)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
