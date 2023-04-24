import { App } from 'vue'
import components from './components/components'
import './styles/index.scss'
export * from './components'
export * from './element'
export * from './hooks'
export * from './util'

const install =  (app: App) => {
  components.forEach(item => {
    app.use(item)
  })
}
export { install }
export default {
  install
}


