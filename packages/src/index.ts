import { App } from 'vue'
import components from './components/components'
import './styles/index.scss'
export * from './components'
export * from './element'
export * from './hooks'
export * from './util'
import { translate } from './util/lang';

const install =  (app: App) => {
  components.forEach(item => {
    app.use(item)
  })
  
  app.config.globalProperties.$u = translate
}
export { install }
export default {
  install
}


